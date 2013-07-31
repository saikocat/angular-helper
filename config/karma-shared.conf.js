module.exports = function(config) {
  config.set({
    basePath: '../',
    exclude: [],
    frameworks: ['jasmine'],
    autoWatch: false,
    reporters: ['progress', 'junit'],
    logLevel: config.LOG_INFO,
    logColors: true,
    loggers: [
      { 
        type: 'console' 
      },
      { 
        type: 'file',
        absolute: false,
        filename: 'logs/karma-test.log',
        maxLogSize: 2048
      }
    ],
    browsers: ['Chrome'],
    port: 8000,
    runnerPort: 9100,
    colors: true,
    captureTimeout: 5000,
    singleRun: false
  }); 
};
