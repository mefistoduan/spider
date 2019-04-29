// let sql = require('mssql');
let sd = require('silly-datetime'); //时间
let request = require('request');
let cheerio = require('cheerio');

var spider = require('./spider'); //爬虫part

const url = 'https://s.weibo.com/top/summary?cate=realtimehot';
const config = "";

// run

search(url);


function search(url) {
    let info = [];
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    let text = '';
    request(url, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            $ = cheerio.load(body);
            $(".nav_cont li a").each(function (i, item) {
                let text = $(this).text();
                info.push(text);
            });
            console.log(info);
            // 写入数据库 todo
            sql.connect(config).then(function () {
                    let sqlrun = "insert into t_info (cdt,content) values ('" + time + "','" + text + "')";
                    console.log(sqlrun);
                    new sql.Request().query(sqlrun).then(function (recordset) {
                        console.log(recordset);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            ).catch(function (err) {
                console.log(err);
            });
        }
    });
};


