let request = require('request');
let cheerio = require('cheerio');
let sql = require('mssql');
let sd = require('silly-datetime');

const url = 'https://www.sina.com.cn/';
const config = "";


let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
let text = 1234;
//
sql.connect(config).then(function () {

    request(url, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            $ = cheerio.load(body);
            let info = [];
            $(".news_top  a").each(function (i, item) {
                let text = $(this).text();
                // Query
                let sqlrun = "insert into t_info (cdt,content) values ('" + time + "','" + text + "')";
                console.log(sqlrun);
                new sql.Request().query(sqlrun).then(function (recordset) {
                    console.log(recordset);
                }).catch(function (err) {
                    console.log(err);
                });
            });
        }
    });
}).catch(function (err) {
    console.log(err);
});
