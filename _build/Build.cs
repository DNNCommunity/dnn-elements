using System;
using System.Linq;
using System.Text;
using Nuke.Common;
using Nuke.Common.CI;
using Nuke.Common.CI.GitHubActions;
using Nuke.Common.Execution;
using Nuke.Common.Git;
using Nuke.Common.IO;
using Nuke.Common.ProjectModel;
using Nuke.Common.Tooling;
using Nuke.Common.Tools.Git;
using Nuke.Common.Tools.GitVersion;
using Nuke.Common.Tools.Npm;
using Nuke.Common.Utilities.Collections;
using Octokit;
using static Nuke.Common.EnvironmentInfo;
using static Nuke.Common.IO.FileSystemTasks;
using static Nuke.Common.IO.PathConstruction;
using static Nuke.Common.IO.TextTasks;
using static Nuke.Common.Tools.Git.GitTasks;
using static Nuke.Common.Tools.Npm.NpmTasks;

[GitHubActions(
  "PR_Validation",
  GitHubActionsImage.WindowsLatest,
  OnPullRequestBranches = new[] { "main", "master", "develop", "development" },
  ImportGitHubTokenAs = "GithubToken",
  InvokedTargets = new[] { nameof(Compile) }
  )]
[GitHubActions(
    "Deploy",
    GitHubActionsImage.WindowsLatest,
    ImportGitHubTokenAs = "GithubToken",
    OnPushBranches = new[] { "main", "master", "release/*" },
    InvokedTargets = new[] { nameof(Deploy) },
    ImportSecrets = new[] { "ERAWARE_NPM_PUBLISH_TOKEN" })]
[GitHubActions(
  "Publish_Site",
    GitHubActionsImage.WindowsLatest,
    ImportGitHubTokenAs = "GithubToken",
    OnPushBranches = new[] { "main", "master", "release/*" },
    InvokedTargets = new[] { nameof(PublishSite) })]
class Build : NukeBuild
{
  /// Support plugins are available for:
  ///   - JetBrains ReSharper        https://nuke.build/resharper
  ///   - JetBrains Rider            https://nuke.build/rider
  ///   - Microsoft VisualStudio     https://nuke.build/visualstudio
  ///   - Microsoft VSCode           https://nuke.build/vscode

  public static int Main() => Execute<Build>(x => x.Compile);

  // Parameters
  [Parameter("Configuration to build - Default is 'Debug' (local) or 'Release' (server)")]
  readonly Configuration Configuration = IsLocalBuild ? Configuration.Debug : Configuration.Release;
  [Parameter("Github Token")]
  readonly string GithubToken;

  // Project information
  private const string organizationName = "eraware";
  private const string repositoryName = "dnn-elements";

  // Nuke features injection
  [GitVersion] readonly GitVersion GitVersion;
  [GitRepository] readonly GitRepository gitRepository;

  // Directories
  AbsolutePath DistDirectory = RootDirectory / "dist";
  AbsolutePath WwwDirectory = RootDirectory / "www";
  AbsolutePath LoaderDirectory = RootDirectory / "loader";

  GitHubClient gitHubClient;
  string releaseNotes = "";
  Release release;

  Target Clean => _ => _
    .Executes(() =>
    {
      EnsureCleanDirectory(DistDirectory);
      EnsureCleanDirectory(WwwDirectory);
      EnsureCleanDirectory(LoaderDirectory);
    });

  Target Compile => _ => _
    .DependsOn(Clean)
    .Produces(WwwDirectory / "*")
    .Executes(() =>
    {
      NpmLogger = (type, output) =>
      {
        if (type == OutputType.Std)
        {
          Logger.Info(output);
        }
        if (type == OutputType.Err)
        {
          if (output.StartsWith("npm WARN", StringComparison.OrdinalIgnoreCase))
          {
            Logger.Warn(output);
          }
          else
          {
            Logger.Error(output);
          }
        }
      };
      NpmInstall();
      Npm($"version {GitVersion.SemVer} --allow-same-version --git-tag-version false");
      NpmRun(s => s.SetCommand("build"));
      NpmRun(s => s.SetCommand("test"));
    });
  Target SetupGithubActor => _ => _
    .Executes(() =>
    {
      var actor = Environment.GetEnvironmentVariable("GITHUB_ACTOR");
      Git("config --global user.name 'Daniel Valadas'");
      Git("config --global user.email 'info@danielvaladas.com'");
      if (IsServerBuild)
      {
        Git($"remote set-url origin https://{actor}:{GithubToken}@github.com/{organizationName}/{repositoryName}.git");
      }
    });
  Target CreateDeployBranch => _ => _
    .Before(Compile)
    .DependsOn(SetupGithubActor)
    .Executes(() =>
    {
      // Prevents a bug where git sends ok message to the error output sink
      GitLogger = (type, output) => Logger.Info(output);

      // Because in CI we are in detached head,
      // we create a local deploy branch to track our commit.
      Git("switch -c deploy");
    });

  Target SetupGitHubClient => _ => _
    .OnlyWhenDynamic(() => !string.IsNullOrWhiteSpace(GithubToken))
    .DependsOn(SetupGithubActor)
    .Executes(() =>
    {
      if (gitRepository.IsOnMainOrMasterBranch() || gitRepository.IsOnReleaseBranch())
      {
        gitHubClient = new GitHubClient(new ProductHeaderValue("Nuke"));
        var tokenAuth = new Credentials(GithubToken);
        gitHubClient.Credentials = tokenAuth;
      }
    });

  Target TagRelease => _ => _
    .OnlyWhenDynamic(() => gitRepository.IsOnMainOrMasterBranch() || gitRepository.IsOnReleaseBranch())
    .OnlyWhenDynamic(() => !string.IsNullOrWhiteSpace(GithubToken))
    .DependsOn(SetupGitHubClient)
    .Executes(() =>
    {
      var version = gitRepository.IsOnMainOrMasterBranch() ? GitVersion.MajorMinorPatch : GitVersion.SemVer;
      GitLogger = (type, output) => Logger.Info(output);
      Git($"tag v{version}");
      Git($"push origin --tags");
    });

  Target GenerateReleaseNotes => _ => _
    .OnlyWhenDynamic(() => gitRepository.IsOnMainOrMasterBranch() || gitRepository.IsOnReleaseBranch())
    .OnlyWhenDynamic(() => !string.IsNullOrWhiteSpace(GithubToken))
    .DependsOn(SetupGitHubClient)
    .DependsOn(TagRelease)
    .Executes(() =>
    {
      // Get the milestone
      var milestone = gitHubClient.Issue.Milestone.GetAllForRepository(organizationName, repositoryName).Result.Where(m => m.Title == GitVersion.MajorMinorPatch).FirstOrDefault();
      if (milestone == null)
      {
        Logger.Warn("Milestone not found for this version");
        releaseNotes = "No release notes for this version.";
        return;
      }

      // Get the PRs
      var prRequest = new PullRequestRequest()
      {
        State = ItemStateFilter.All
      };
      var pullRequests = gitHubClient.Repository.PullRequest.GetAllForRepository(organizationName, repositoryName, prRequest).Result.Where(p =>
          p.Milestone?.Title == milestone.Title &&
          p.Merged == true &&
          p.Milestone?.Title == GitVersion.MajorMinorPatch);

      // Build release notes
      var releaseNotesBuilder = new StringBuilder();
      releaseNotesBuilder.AppendLine($"# {repositoryName} {milestone.Title}")
          .AppendLine("")
          .AppendLine($"A total of {pullRequests.Count()} pull requests where merged in this release.").AppendLine();

      foreach (var group in pullRequests.GroupBy(p => p.Labels[0]?.Name, (label, prs) => new { label, prs }))
      {
        releaseNotesBuilder.AppendLine($"## {group.label}");
        foreach (var pr in group.prs)
        {
          releaseNotesBuilder.AppendLine($"- #{pr.Number} {pr.Title}. Thanks @{pr.User.Login}");
        }
      }

      releaseNotes = releaseNotesBuilder.ToString();
      using (Logger.Block("Release Notes"))
      {
        Logger.Info(releaseNotes);
      }
    });

  Target Release => _ => _
    .OnlyWhenDynamic(() => gitRepository.IsOnMainOrMasterBranch() || gitRepository.IsOnReleaseBranch())
    .OnlyWhenDynamic(() => !string.IsNullOrWhiteSpace(GithubToken))
    .DependsOn(SetupGitHubClient)
    .DependsOn(GenerateReleaseNotes)
    .DependsOn(TagRelease)
    .Executes(() =>
    {
      var newRelease = new NewRelease(gitRepository.IsOnMainOrMasterBranch() ? $"v{GitVersion.MajorMinorPatch}" : $"v{GitVersion.SemVer}")
      {
        Body = releaseNotes,
        Draft = true,
        Name = gitRepository.IsOnMainOrMasterBranch() ? $"v{GitVersion.MajorMinorPatch}" : $"v{GitVersion.SemVer}",
        TargetCommitish = GitVersion.Sha,
        Prerelease = gitRepository.IsOnReleaseBranch(),
      };
      release = gitHubClient.Repository.Release.Create(organizationName, repositoryName, newRelease).Result;
      Logger.Info($"{release.Name} released !");
    });

  Target Deploy => _ => _
    .OnlyWhenDynamic(() => gitRepository.ToString() == $"https://github.com/{organizationName}/{repositoryName}")
    .DependsOn(Compile)
    .DependsOn(GenerateReleaseNotes)
    .DependsOn(TagRelease)
    .DependsOn(Release)
    .Executes(() => {
    var npmToken = Environment.GetEnvironmentVariable("ERAWARE_NPM_PUBLISH_TOKEN");
      Npm($"login --scope=@eraware --registry=https://registry.npmjs.org/:_authToken={npmToken}");
      NpmRun(s => s.SetCommand("publish --access public"));
    });

  Target PublishSite => _ => _
    .DependsOn(CreateDeployBranch)
    .DependsOn(Compile)
    .Executes(() =>
    {
      Git("add www -f");
      Git("commit --allow-empty -m \"Commit latest build\"");
      Git("checkout -b newsite origin/site");
      Git("rm -r .");
      Git("commit -m \"Deleted old build\"");
      Git("cherry-pick deploy --strategy-option=theirs");
      CopyDirectoryRecursively(RootDirectory / "www", RootDirectory, DirectoryExistsPolicy.Merge);
      DeleteDirectory(RootDirectory / "www");
      Git("rm -r www");
      Git("add ./*.html");
      Git("add ./*.json");
      Git("add build");
      Git("commit -m \"Move files to root folder\"");
      Git("push origin HEAD:site");
      Git("checkout deploy");
    });
}
