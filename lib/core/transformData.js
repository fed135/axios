'use strict';

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  fns = Array.isArray(fns) ? fns : [fns];
  /*eslint no-param-reassign:0*/
  fns.filter(Boolean).forEach(function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};
