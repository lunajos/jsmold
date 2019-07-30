'use strict';
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

module.exports = function (file) {

    var dest = path.join(__dirname, 'files', file);
    var src  = path.resolve(file);

    // destination.txt will be created or overwritten by default.
    fs.copyFile(src, dest, function (err) {
      if (err) {
        throw err;
      }

      console.log(chalk.green('Saved ' + file));
    });

};

