let read = require('./read'),
    write = require('./write'),
    url = 'http://www.dytt8.net/index.html',
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