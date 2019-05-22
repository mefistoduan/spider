let sql = require('mssql');
let sd = require('silly-datetime'); //时间
let request = require('request');
let cheerio = require('cheerio');

var spider = require('./spider'); //爬虫part
// weibo
const url = 'https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr=6';
// const url = 'http://www.emeixian.com/category-166-b0.html';
const config = "";
const minute = Math.random() * 10000;
// const timeout = (minute * minute).toFixed(2);
const timeout = 10000;
// run
search(url);
let myInterval = setInterval(search, timeout, url);

function search(url) {
    let info = [];
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    let text = '';
    request(url, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            $ = cheerio.load(body);
            $("#pl_top_realtimehot .td-02 a").each(function (i, item) {
                let text = $(this).text();
                info.push(text);
            });
            // 写入数据库 todo
            console.log(info);
            let sqlrun = '';
            sql.connect(config).then(function () {
                info.forEach(function (text) {
                    sqlrun = "insert into t_info (cdt,content) values ('" + time + "','" + text + "')";
                    new sql.Request().query(sqlrun).then(function (recordset) {
                        console.log('ok');
                    }).catch(function (err) {
                        console.log(err);
                    });
                })
                }
            ).catch(function (err) {
                console.log(err);
            });
        }
    });
};


