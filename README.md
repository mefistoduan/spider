# spider

 1.获取新浪首页的新闻
 
 2.提取关键词
 
 3.存入数据库
 
 4.定时执行
 
 5.获取每日股价信息（关键词股价
 
 
 ===============
t_user

| name | type | default | memo| 
| ------------- |:-------------:| -----:|-----:|
|id |int | - | -
|usercode |string(20) | - | -
|pwd |string(50)| - | -
|state |smallInt | 1|  1 normal 2pause 99delete

t_info

| name | type | default | memo| 
| ------------- |:-------------:| -----:|-----:|
|iid |int|-|-
|cdt |datatime|-|-
|content| string(200} |




