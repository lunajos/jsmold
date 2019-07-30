'use strict';
var fs = require('fs');
var path = require('path');
var help = require('./_help');
var chalk = require('chalk');
var async = require('async');

module.exports = function (name, pathExecuted) {

    var defaultList;

    // check for name of project
    function checkParam (next) {
        if (name === undefined) {
            console.log('Cannot create project\n');
            help();
        } else {
            console.log(pathExecuted);
            fs.mkdirSync(name);
            console.log('Created ' + name + ' Project');
        }
        next(null);
    }

    // Get list
    function getList (next) {
        fs.readdir(path.join(__dirname, 'files'), function (err, files) {
            if (err) { throw err; }
            defaultList = files;
            next(null);

            console.log('Files to mold:');

            for (var i=0; i<files.length; i++) {
                console.log(chalk.green('   - ' + files[i]));
            }
        });
    }

    // destination.txt will be created or overwritten by default.
    function copyFiles (next) {
        for (var i=0; i<defaultList.length; i++) {

            var dest = path.resolve(name, defaultList[i]);
            var src = path.join(__dirname, 'files', defaultList[i]);

            fs.copyFile(src, dest, function (err) {

                if (err) {
                    console.log(chalk.green('Could not create file(s)')+ err);
                    throw err;
                }
            });
        }

        next(null);
    }

    async.series([
        checkParam,
        getList,
        copyFiles
    ]);


};
