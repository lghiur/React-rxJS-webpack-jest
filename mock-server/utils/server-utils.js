/**
 * @module Server utility functions
 * @desc Returns an utils object which can copy the required REST description files and Generators from app components.
 */
var glob = require("glob"),
  ncp = require('ncp').ncp,
  path = require('path');

var utils = {
  copyMocks: function(globs) {
    var options = [],
      destination = path.resolve(__dirname, "../rest/"),
      folders = glob.sync(globs, options);

    copyFolders(folders, destination);
  },
  copyGenerators: function(globs) {
    var options = [],
      destination = path.resolve(__dirname, "../generators/"),
      folders = glob.sync(globs, options);

    copyFolders(folders, destination);
  }
};

/**
 * @function copyFolders
 * @desc Copies folders and contents to the specified destination. Uses the ncp module to copy folders recursively.
 * @param {Array} paths for folders which copy
 * @param {string} destination path
 */
function copyFolders(folders, destination) {
  folders.forEach(function(dir, index) {
    ncp(dir, destination, {}, function(error) {
      if (error) {
        console.log(error);
      }
    });
  });
}

module.exports = utils;
