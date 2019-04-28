

// let search = function (url) {
//     let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
//     let text = '';
//     let info = [];
//     request(url, function (err, res, body) {
//         if (!err && res.statusCode == 200) {
//             $ = cheerio.load(body);
//             let info = [];
//             $("#pl_top_realtimehot td a").each(function (i, item) {
//                 let text = $(this).text();
//                 info.push(text);
//             });
//         }
//     });
//     return info
// };




// module.exports.searcher = search;