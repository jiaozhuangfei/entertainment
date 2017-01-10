let express = require('express'),
    app = express(),
    Movie = require('./model').Movie,
    path = require('path');
app.set('view engine', 'html');
app.set('views', path.resolve('template'));
app.engine('html', require('ejs').__express);
app.use(express.static(path.resolve('node_modules')));
app.get('/', function (req, res) {
    Movie.find({}, function (err, result) {
        if (err) {
            res.send('读取数据库失败');
        } else {
            res.render('movie', {title: '最新电影', movies: result});
        }
    })
});
app.listen(8080, function () {
    console.log('8080');
});