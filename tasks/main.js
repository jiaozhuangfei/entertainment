let read = require('./read'),
    write = require('./write'),
    async = require('async');
module.exports = function (url, callback) {
    async.waterfall([
        function (cb) {
            read(url, cb);
        },
        function (movies, cb) {
            write(movies, cb);
        }
    ], function (err, result) {
        callback();
    })
};