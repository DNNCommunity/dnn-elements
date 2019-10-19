#tool nuget:?package=GitVersion.CommandLine&version=5.0.1
#addin nuget:?package=Cake.Yarn&version=0.4.6
///////////////////////////////////////////////////////////////////////////////
// ARGUMENTS
///////////////////////////////////////////////////////////////////////////////
var target = Argument("target", "Default");
var configuration = Argument("configuration", "Release");

///////////////////////////////////////////////////////////////////////////////
// Constants, initial variables
///////////////////////////////////////////////////////////////////////////////
GitVersion version;

///////////////////////////////////////////////////////////////////////////////
// SETUP / TEARDOWN
///////////////////////////////////////////////////////////////////////////////
Setup(ctx =>
{
   // Executed BEFORE the first task.
   Information ("Setting version...");
   version = GitVersion(new GitVersionSettings { UpdateAssemblyInfo = false});
   Information ("Version set to " + version.SemVer);
   Information("Running tasks...");
});
Teardown(ctx =>
{
   // Executed AFTER the last task.
   Information("Finished running tasks.");
});
///////////////////////////////////////////////////////////////////////////////
// TASKS
///////////////////////////////////////////////////////////////////////////////
Task("YarnVersion")
.Does(() => {
   Information("Setting package version to " + version.SemVer);
   Yarn.Version(v => {
      v.SetVersion(version.SemVer);
      v.DisableGitTagCreation();
   });
});

Task("Default")
.IsDependentOn("YarnVersion")
.Does(() => {
   Information("Running build via Yarn");
   Yarn.Install();
   Yarn.RunScript("build");
});
RunTarget(target);
