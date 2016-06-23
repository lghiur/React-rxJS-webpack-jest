/**
 * @module Mock Server Configuration
 * @desc Returns a configuration object for the mock node server
 * @example
 */
var path = require('path'),
  config;

config = {
  restPath: path.resolve(__dirname, './rest'),
  funcPath: path.resolve(__dirname, './generators'),
  title: "To do List",
  version: 1,
  urlBase: 'http://localhost:4444',
  urlPath: '',
  port: 4444,
  swaggerImport: {
        protocol: 'http',
        authUser: undefined,
        authPass: undefined,
        host: 'localhost',
        port: 4444,
        path: '/swagger',
        dest: path.resolve(__dirname, './mocks/rest'),
        createErrorFile: true,
        createEmptyFile: true,
        overwriteExistingDescriptions: true,
        maxRefDeep: 1
    }
};

module.exports = config;
