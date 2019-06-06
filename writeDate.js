let sd = require('silly-datetime'); //时间
let sql = require('mssql');
const config = require('./config/config').sqlUrl;

let writeDate = function (info, modeTurn) {
    let weight = '';
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    sql.connect(config).then(() => {
        info.forEach(function (text, index) {
            weight = parseInt( 100 - index);
                if (modeTurn == 'test') {
                    sqlrun = "insert into t_test_info (cdt,content,weight) values ('" + time + "','" + text + "','" + weight + "')";
                } else {
                    sqlrun = "insert into t_info (cdt,content,weight) values ('" + time + "','" + text + "','" + weight + "')";
                }
                new sql.Request().query(sqlrun).then(function (recordset) {
                        console.log('ok');
                    }).catch(function (err) {
                        console.log(err);
                    });
            });

    }).then(result => {
        console.log('wirte is ok');
        console.dir(result)
        // sql.close();

        //请求成功
    }).catch(err => {
        //err 处理
        sql.close();

    });
    sql.on('error', err => {
        //error 处理
    })
};


module.exports.writeDate = writeDate;
