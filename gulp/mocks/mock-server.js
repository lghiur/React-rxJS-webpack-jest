var path = require('path');

module.exports = function(gulp, plugins) {
  return function(done) {
      plugins.nodemon({
        script: path.resolve(__dirname, '../../mock-server/mock-server.js'),
        watch: 'app/**/mocks/',
        tasks: ['copy-mocks'],
        delay: 2,
        env: { 'NODE_ENV': 'development' }
      });

      done();
  };
};
