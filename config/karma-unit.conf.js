var sharedConfig = require(__dirname + '/karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config);

  config.set({
    files: [
      'components/lodash/lodash.js',
      'components/angular/angular.js',
      'components/angular-mocks/angular-mocks.js',
      'src/*.js',
      'src/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    junitReporter: {
      outputFile: 'test_out/units.xml',
      suite: 'units'
    }
  });
};
