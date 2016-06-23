var jest = require('jest-cli'),
  jestConfig = require('./jest-config.js');

module.exports = function(gulp, plugins) {
  return function(done) {
      plugins.watch(jestConfig.rootDir + "/**/*.js", function(props) {
        var arr = props.path.split('\\');

        arr.splice(arr.length - 2, 2);
        jestConfig.rootDir = arr.join('\\');

        jest.runCLI({ config : jestConfig }, ".");
      });
  };
};
