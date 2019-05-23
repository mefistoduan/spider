let request = require('request');
let cheerio = require('cheerio');

// var spider = require('./spider'); //爬虫part
let writeDater = require('./writeDate');

const ModeNum = 1;// 1 is product 0 is test
let modeTurn = ModeNum == 0 ? 'test':'product';

let url = '';
let timeout = '';
if(modeTurn == 'test'){
    url = 'http://www.emeixian.com/category-166-b0.html';
    timeout = 10800;//3 min
}else{
    // weibo
    url = 'https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr=6';
    timeout = 10800000;//3 h
}

// run
search(url);
let myInterval = setInterval(search, timeout, url);

function search(url) {
    let info = [];
    let text = '';
    request(url, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            $ = cheerio.load(body);
            if(modeTurn == 'test'){
                $(".list_content_item li a p").each(function (i, item) {
                    let text = $(this).text();
                    info.push(text);
                });
            }else{
                $("#pl_top_realtimehot .td-02 a").each(function (i, item) {
                    text = $(this).text();
                    info.push(text);
                });
            }
            writeDater.writeDate(info,modeTurn);
        }
    });
};


