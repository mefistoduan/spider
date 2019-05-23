let sd = require('silly-datetime'); //时间
let sql = require('mssql');
const config = "";

let writeDate = function (info,modeTurn) {
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    // 写入数据库
    let sqlrun = '';
    sql.connect(config).then(function () {
            info.forEach(function (text) {
                if(modeTurn == 'test'){
                    sqlrun = "insert into t_test_info (cdt,content) values ('" + time + "','" + text + "')";
                }else{
                    sqlrun = "insert into t_info (cdt,content) values ('" + time + "','" + text + "')";
                }
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
    return 0
};




module.exports.writeDate = writeDate;