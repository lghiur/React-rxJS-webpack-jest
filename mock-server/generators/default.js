/**
 * @module Default Example Generator
 * @desc Returns the current date
 * @example
 * Inside a mock json you can call a generator function inside this type of block:
 * <%-  getTime() %>
 * Generator functions are not namespaced so avoid duplicate names.
 * The return value will be written in the json when requested by the server.
 *
 * Faker can be used to mock such data. To use it just import the module:
 * var faker = require('faker');
 */
module.exports = {
  getTime: function() {
    var timeData = {
        time: Date.now()
    };

    return JSON.stringify(timeData);
  }
};
