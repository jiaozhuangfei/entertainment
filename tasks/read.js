let request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs'),
    debug = require('debug')('movie:read'),
    iconv = require('iconv-lite');
module.exports = function (url, callback) {
    var items = [];
    //debug('读取电影列表');
    request({url: url, encoding: null}, function (err, response, body) {
        body = iconv.decode(body, 'GBK');
        var $ = cheerio.load(body);
        //fs.writeFile('movie.html', body);
        //console.log(body);
        //http://www.dytt8.net/html/gndy/dyzz/20170108/52944.html
        ///html/gndy/dyzz/20170108/52944.html
        $('.inddline a').each(function () {
            var $this = $(this);
            var href = $this.attr('href');
            if (href.indexOf('index') == -1 && href.indexOf('gndy') !== -1) {
                items.push({
                    name: $this.text(),
                    url: 'http://www.dytt8.net' + href
                });
                //debug('读取电影', $this.text();
            }
        });
        callback(null, items);
        //debug('读取电影完毕');
    });
};