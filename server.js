const express = require('express'); // express
const app = express(); // method 호출 // express.js guid 사이트 참조

const server = app.listen(3000, () => { // 3000은 포트명, callback 함수는 뒤에
  console.log('Start Server : localhost: 3000');
}); // 사이트는 연결되지만 다른 어떠한 것이 존재하지 않는다.

app.set('views', __dirname + '/views'); // views 안에 존재하는 파일을 가져오기 위한 설정
app.set('views engine', 'ejs'); // ejs = ejs 탬플릿 엔진 (html안에서 js코드를 같이쓸 수 있게 해주는 라이브러리 일종)
app.engine('html', require('ejs').renderFile); // ejs를 통해서 html을 연결 시켜 준다.

app.get('/', function (req, res) {
  // res.send('hello world'); // 나는 이러한 메세지를 response하겠다.
  res.render('index.html');
});
// 잘 모를때는 express render document를 참조할 것

app.get('/about', function (req, res) {
  // res.send('about page!!');
  res.render('about.html'); // html 파일을 연결해준다.
});

var mysql = require('mysql');
var pool = mysql.createConnection({
  host     : '4',
  user     : '1',
  password : '1',
  database : '3'
});

app.get('/db', function (req, res) {
  pool.getConnection(function (err, connection) {
    if(err) throw err; // not connected!

    //User the connection
    connection.query('select * from test', function (error, results, fields) {
      res.send(JSON.stringify(results)); // json.stringify를 한번 알아보자 JSON.parse도
      console.log('results', results);
      
      // When done with the connection, release it.
      connection.release();

      // Handle error after the release.
      if(error) throw error;

      // Don't use the connection here, it has been returned to the pool.
    });
  });
});