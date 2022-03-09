const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mauricio Villaescusa',
  authorAddress: 'maurovc@amazon.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-patterns',
  repositoryUrl: 'https://github.com/spac3-monk3y/cdk-patterns.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
  // publishToPypi: {
  //   distName: 'cdk-patterns',
  //   module: 'cdk_patterns',
  // },
});

project.addGitIgnore('.dev');
project.addGitIgnore('.DS_Store');

project.synth();