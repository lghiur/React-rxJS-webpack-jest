/**
 * @module Mock server
 * @desc Runs the mock node server with the imported configuration.
 */
var nodeMockServer = require('node-mock-server'),
  serverCfg = require('./server-config');

//start the server
nodeMockServer(serverCfg);
