'use strict';

var pkgjson = require('../package.json');

module.exports = function () {
    console.log('version: ' + pkgjson.version);
};
