# spider

 1.获取新浪首页的新闻
 
 2.提取关键词
 
 3.存入数据库
 3.1 结构进行优化，按照功能进行分包（恶补一下数据库知识得
 
 4.定时执行
 
 5.获取每日股价信息（关键词股价
 
 ============
 todo
 
 1.解决自增问题
 
 ===============
 ##nlp 
 
###t_user

| name | type | default | memo| 
| ------------- |:-------------:| -----:|-----:|
|id |int | - | not null
|usercode |varchar(20) | - | -
|pwd |varchar(50)| - | -
|state |smallInt | 1|  1 normal 2pause 99delete

####t_info

| name | type | default | memo| 
| ------------- |:-------------:| -----:|-----:|
|iid |int|-|not null
|cdt |datatime|-|-
|content| varchar(200} |




