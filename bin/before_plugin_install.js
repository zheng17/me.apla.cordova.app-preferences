'use strict';

module.exports = function (context) {
  // var req = context.requireCordovaModule,

    var  path = require ('path'),
      pathParse = require ('./lib/path-parse');

  path.parse = path.parse || pathParse;

  return true;
};
