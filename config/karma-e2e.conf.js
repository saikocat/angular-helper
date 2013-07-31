var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config);

  config.set({
    frameworks: ['ng-scenario'],
    files: [
      'test/e2e/**/*.js'
    ],

    junitReporter: {
      outputFile: 'test_out/e2e.xml',
      suite: 'modules'
    }
  });
};