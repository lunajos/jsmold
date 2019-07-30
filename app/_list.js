'use strict';
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

module.exports = function () {
    console.log('List:');

    fs.readdir(path.join(__dirname, 'files'), function (err, files) {
        if (err) {
            console.log('err: ' + err);
        }

        for (var i=0; i<files.length; i++) {
            console.log(chalk.green(' - ' + files[i]));
        }


    });

};
