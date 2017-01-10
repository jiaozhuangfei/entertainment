let async = require('async'),
    Movie = require('../model').Movie;
module.exports = function (movies, callback) {
    Movie.remove({}, function () {
        async.forEach(movies, function (movie, cb) {
            Movie.create(movie, function (err, result) {
                cb();
            })
        }, function () {
            callback();
        })
    })
};