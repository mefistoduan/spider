
let request = require('request');
let cheerio = require('cheerio');

let url = 'https://www.sina.com.cn/';
request(url,function (err,res,body) {
    if (!err && res.statusCode == 200) {
        $ = cheerio.load(body);
        let info = [];
        $(".news_top  a").each(function (i, item) {
            info.push($(this).text());
        });
        console.log(info);
    }
});

