/*
* 1.获取新浪首页的新闻
* 2.提取关键词
* 3.存入数据库
* 4.定时执行
* 5.获取每日股价信息（关键词股价
*
* */

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

