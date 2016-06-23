var jest = require('jest-cli'),
  jestConfig = require('./jest-config.js');

module.exports = function(gulp, plugins) {
  jestConfig.collectCoverage = true;

  return function(done) {
    jest.runCLI({ config : jestConfig }, ".", function() {
        done();
    });
  };
};
