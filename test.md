 
 ##weibo
 $("#pl_top_realtimehot .td-02 a").each(function (i, item) {
                let text = $(this).text();
                info.push(text);
            });
            
##meixian
    $(".list_content_item li a p").each(function (i, item) {
                   let text = $(this).text();
                   info.push(text);
               });         
###部署

安装
cnpm i pm2

使用
pm2 star index.js

(不同项目的启动头文件不一致


关闭
pm2 stop all