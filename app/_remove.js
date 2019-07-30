'use strict';
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

module.exports = function (file) {

    var filePath = path.join(__dirname, 'files', file);

    console.log('Removing..');

    fs.unlink(filePath, function (err) {

        if (err) {
            throw err;
        }

        console.log(chalk.red('Removed: ' + file));
    });
};
