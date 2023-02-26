using System;
using System.Linq;
using System.Net.Http;
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
  GitHubActionsImage.UbuntuLatest,
  AutoGenerate = false,
  ImportSecrets = new[] { nameof(GithubToken) },
  OnPullRequestBranches = new[] { "main", "master", "develop", "development" },
  InvokedTargets = new[] { nameof(Compile) }
  )]
[GitHubActions(
    "Deploy",
    GitHubActionsImage.UbuntuLatest,
    AutoGenerate = false,
    ImportSecrets = new[] { nameof(GithubToken), "NPM_TOKEN" },
    OnPushBranches = new[] { "main", "master", "release/*" },
    InvokedTargets = new[] { nameof(Deploy) }
)]
[GitHubActions(
  "Publish_Site",
    GitHubActionsImage.UbuntuLatest,
    AutoGenerate = false,
    ImportSecrets = new[] { nameof(GithubToken) },
    OnPushBranches = new[] { "main", "master", "release/*" },
    InvokedTargets = new[] { nameof(PublishSite) }
  )]
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
  private const string organizationName = "DNNCommunity";
  private const string repositoryName = "dnn-elements";

  // Nuke features injection
  [GitVersion] readonly GitVersion GitVersion;
  [GitRepository] readonly GitRepository gitRepository;

  // Directories
  AbsolutePath DistDirectory = RootDirectory / "dist";
  AbsolutePath WwwDirectory = RootDirectory / "storybook-static";
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
          Serilog.Log.Information(output);
        }
        if (type == OutputType.Err)
        {
          if (output.StartsWith("npm WARN", StringComparison.OrdinalIgnoreCase))
          {
            Serilog.Log.Warning(output);
          }
          else
          {
            Serilog.Log.Error(output);
          }
        }
      };
      var version = gitRepository.IsOnMainOrMasterBranch() ? GitVersion.MajorMinorPatch : GitVersion.SemVer;
      Environment.SetEnvironmentVariable("NODE_OPTIONS", "--openssl-legacy-provider");
      Npm($"version {version} --allow-same-version --git-tag-version false");
      NpmInstall();
      NpmRun(s => s.SetCommand("build"));
      // Only run tests on PRs.
      if (!(
        gitRepository.IsOnDevelopBranch() ||
        gitRepository.IsOnMainOrMasterBranch() ||
        gitRepository.IsOnReleaseBranch())){
          NpmRun(s => s.SetCommand("test"));
        }
      NpmRun(s => s.SetCommand("build-storybook"));
      CopyDirectoryRecursively(DistDirectory, WwwDirectory, DirectoryExistsPolicy.Merge, FileExistsPolicy.Overwrite);
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
      GitLogger = (type, output) => Serilog.Log.Information(output);

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
    .Before(Compile)
    .DependsOn(SetupGitHubClient)
    .Executes(() =>
    {
      var version = gitRepository.IsOnMainOrMasterBranch() ? GitVersion.MajorMinorPatch : GitVersion.SemVer;
      GitLogger = (type, output) => Serilog.Log.Information(output);
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
        Serilog.Log.Warning("Milestone not found for this version");
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
        Serilog.Log.Information(releaseNotes);
    });

  Target Release => _ => _
    .OnlyWhenDynamic(() => gitRepository.IsOnMainOrMasterBranch() || gitRepository.IsOnReleaseBranch())
    .OnlyWhenDynamic(() => !string.IsNullOrWhiteSpace(GithubToken))
    .DependsOn(SetupGitHubClient)
    .DependsOn(GenerateReleaseNotes)
    .DependsOn(TagRelease)
    .DependsOn(Compile)
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
      Serilog.Log.Information($"{release.Name} released !");
    });

  Target Deploy => _ => _
    .OnlyWhenDynamic(() => gitRepository.ToString() == $"https://github.com/{organizationName}/{repositoryName}")
    .DependsOn(Compile)
    .DependsOn(GenerateReleaseNotes)
    .DependsOn(TagRelease)
    .DependsOn(Release)
    .Executes(() => {
      Environment.SetEnvironmentVariable("NODE_OPTIONS", "--openssl-legacy-provider");
      var npmToken = Environment.GetEnvironmentVariable("NPM_TOKEN");
      WriteAllText(RootDirectory / ".npmrc", $"//registry.npmjs.org/:_authToken={npmToken}");
      var tag = gitRepository.IsOnMainOrMasterBranch() ? "latest" : "next";
      Npm($"publish --access public --tag {tag}");
    });

  Target PublishSite => _ => _
    .DependsOn(CreateDeployBranch)
    .DependsOn(Compile)
    .Executes(() =>
    {
      Environment.SetEnvironmentVariable("NODE_OPTIONS", "--openssl-legacy-provider");
      NpmRun(s => s.SetCommand("deploy-storybook"));
    });
}
