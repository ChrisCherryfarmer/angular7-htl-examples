const crew = require('serenity-js/lib/stage_crew');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:3000/',
  framework: 'custom',
  frameworkPath: require.resolve('serenity-js'),
    serenity: {
        dialect: 'cucumber',
        crew: [
            crew.serenityBDDReporter(),
            crew.consoleReporter(), 
            crew.photographer()
        ]
    },
    cucumberOpts: {
        require: ['src/lib/cucumber.hooks.ts', 'e2e/step_definitions/**/*.steps.ts'],
        format: 'pretty',
        tags: ['~@Ignore'],
        compiler: 'ts:ts-node/register'
    },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  }
};
