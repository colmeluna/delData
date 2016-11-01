/**
 * Created by colmeluna on 2016/10/30.
 */
var mysql = require('mysql');
var fs = require('fs');
//var config = JSON.parse(fs.readFileSync('./mysql.json'));

function getName(callback) {
    var connection = mysql.createConnection({
        // host:'',
        // user:'root',
        // password:'',
        // database:'test',
        // port:'3306'
        host:'127.0.0.1',
        user:'root',
        password:'root',
        database:'test',
        port:'3306'
    });
    connection.connect();
    connection.query('SELECT name from people where id = 1', function (err, rows, fields) {
        if (err) throw err;
        name = rows[0].name;
        console.log('name is ' + name);
        callback(null, name);
    });
    connection.end();
    console.log('close the connection');
}

   //此处页面加载的时候就会执行 getName()查询，所以 会遇到  connnection.end(); 关闭链接  无法继续查询数据的问题。
   /* var name = getName(function (err, data) {
        if (err) {
            alert('出错了:' + err);
        } else {
            //alert('你要的页面数据为:' + data);
          //  document.title = data+"的赋值测试";
          //  alert('ok');
        }
    });*/


$('#goDel').bind("click", function(){
    console.log("[goDel]click");
    var progressno = $('#progressno').val();
    var datatime =  $('#dtp_input1').val();
    console.log(progressno,datatime);
    document.title = datatime;
    getName(function (err, data) {
        if (err) {
            alert('出错了:' + err);
        } else {
           //alert('你要的页面数据为:' + data);
            document.title = data+"的赋值测试";
            //  alert('ok');
        }
    });

    goDel(progressno,datatime);
});

function goDel(progressno,datatime){
    console.log('show progress no  is :'+progressno);
    console.log('show datatime is :'+datatime);
}