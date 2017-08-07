var express = require('express');
var router = express.Router();
var request = require('request');
var session = require('express-session');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*样例*/
// router.get('/insert_user', function(req, res, next) {
//     var name=req.query.name;//接收前端传来的数据
//     var tel=req.query.tel;//接收前端传来的数据
//     var psd=req.query.psd;//接收前端传来的数据
//	   //用get发给后台和post方式发给后台，26行27行二选一，有中文必须post
//     request.post({url:'http://127.0.0.1/afterEnd/user/insert_user', form: {name:name,tel:tel,psd:psd}}, function (error, response, body) {
//     request.get('http://127.0.0.1/afterEnd/user/insert_user?name='+name+"&tel="+tel+"&psd="+psd, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             res.json(body);//发给前台
//         }
//     });
// }); 
router.get('/insert_user', function(req, res, next) {
    var name=req.query.name;
    var tel=req.query.tel;
    var psw=req.query.psw;
    request.post({url:'http://127.0.0.1/afterEnd/user/insert_user', form: {name:name,tel:tel,psw:psw}}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });
}); 
router.get('/login_user', function(req, res, next) {
    var tel=req.query.tel;
    var psw=req.query.psw;
    request.get('http://127.0.0.1/backstage/user/login_user?tel='+tel+"&psw="+psw, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });
});
module.exports = router;
