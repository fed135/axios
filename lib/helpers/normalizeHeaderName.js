'use strict';

module.exports = function normalizeHeaderName(headers, normalizedName) {
  if (!headers) {
    return;
  }
  Object.keys(headers).forEach(function processHeader(name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name];
      delete headers[name];
    }
  });
};
