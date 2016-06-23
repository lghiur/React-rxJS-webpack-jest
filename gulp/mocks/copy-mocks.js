var utils = require('../../mock-server/utils/server-utils');

module.exports = function(gulp, plugins) {
  return function(done) {
    utils.copyMocks('app/**/rest');
    utils.copyGenerators('app/**/generators');
    done();
  };
};
