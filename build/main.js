"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//import { GetinfoProvider } from '../webapp/src/providers/getinfo/getinfo';
const session = require('express-session');
const mysql = require('mysql');
var bodyParser = require('body-parser');
var MySQLStore = require('express-mysql-session')(session);
const cors = require('cors');
const multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
const upload = multer({
    limits: { fileSize: 5 * 1024 * 1024 },
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'avatars/'); // avatars 폴더에 파일을 저장한다.
        },
        filename(req, file, cb) {
            cb(null, file.originalname); // 전송된 파일 자신의 이름으로 파일을 저장한다.
        }
    })
});
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Root!0000',
    database: 'codemoa',
    port: '3306' // mysql 접속 port
});
// Connect To database (DB에 직접 연결하는 )
conn.connect(function (error) {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }
    console.log('connected as id ' + conn.threadId);
});
class Server {
    constructor() {
        // 사용할 포트
        this.PORT = 3000;
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(session({
            secret: 'abcd@@@@asdasd',
            resave: false,
            saveUninitialized: true,
            store: new MySQLStore({
                host: '127.0.0.1',
                user: 'root',
                password: 'Root!0000',
                database: 'codemoa',
                port: '3306'
            })
        }));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.listen(this.PORT, () => {
            this.app.use('/', express.static(__dirname + '/webapp'));
            console.log(`Listening at http://localhost:${this.PORT}/`);
        });
        this.app.get('/user', function (req, res, next) {
            var sql = 'select * from question';
            conn.query(sql, function (err, data) {
                if (err)
                    console.log(err);
                var string = JSON.stringify(data);
                var json = JSON.parse(string);
                console.log('json: ', json);
                res.send(json);
            });
        });
        this.app.get('/myQuestion', function (req, res, next) {
            var email = req.query.m_email;
            console.log("reqemail", email);
            var sql = 'select * from question where m_email = ?';
            conn.query(sql, [email], function (err, data) {
                if (err)
                    console.log(err);
                var string = JSON.stringify(data);
                var json = JSON.parse(string);
                console.log('json: ', json);
                res.send(json);
            });
        });
        this.app.get('/user/question', function (req, res) {
            var q_id = req.query.q_id;
            var sql = 'select * from question where q_id = ?';
            conn.query(sql, [q_id], function (err, data) {
                if (err)
                    console.log(err);
                var string = JSON.stringify(data);
                var json = JSON.parse(string);
                console.log('question: ', json);
                res.send(json);
            });
        });
        this.app.post('/login', function (req, res) {
            req.body = Object.keys(req.body);
            req.body = JSON.parse(req.body[0]);
            //var array  = Object.keys(req.body);
            var email = req.body.loginid;
            var pw = req.body.loginpw;
            console.log(req);
            console.log("main", req.body.loginid);
            var sql = 'select * from member where m_email = ?';
            let logS = true;
            conn.query(sql, [email], function (err, data) {
                if (err)
                    console.log("로그인 에러남", err);
                var string = JSON.stringify(data);
                var json = JSON.parse(string);
                console.log('데이터값: ', json);
                if (!json[0]) {
                    logS = false;
                    //res.render('user', { error: '로그인실패'});
                    res.send(logS);
                }
                else if (json[0].m_password != pw) {
                    logS = false;
                    res.send(logS);
                    //res.redirect('/');
                    console.log('로그인실패');
                }
                else if (json[0].m_password == pw) {
                    // req.session.email = email;
                    // console.log('email저장됐니?', req.session.email);
                    logS = true;
                    console.log('로그인성공');
                    res.send(json[0]);
                    //res.redirect('/');
                }
            });
        });
        this.app.post('/questInput', function (req, res) {
            req.body = Object.keys(req.body);
            req.body = JSON.parse(req.body[0]);
            var name = req.body.name;
            var email = req.body.email;
            var title = req.body.title;
            var content = req.body.content;
            var category = req.body.category;
            console.log(req);
            // content = content.replace(/\n/g, "<br>");
            // content = content.replaceAll("<br>", "\r\n");
            var sql = 'insert into question values(0,?,?,?,?,0,?)';
            let logS = true;
            conn.query(sql, [email, name, title, content, category], function (err, data) {
                if (err) {
                    console.log("에러남", err);
                    res.send(false);
                }
                else {
                    res.send(true);
                }
            });
        });
        this.app.post('/register', function (req, res) {
            req.body = Object.keys(req.body);
            req.body = JSON.parse(req.body[0]);
            var name = req.body.m_name;
            var email = req.body.m_email;
            var password = req.body.m_password;
            console.log(req);
            console.log("main", req.body.m_name);
            var sql = 'insert into member values(0,?,?,?)';
            let logS = true;
            conn.query(sql, [email, password, name], function (err, data) {
                if (err) {
                    console.log("에러남", err);
                    res.send(false);
                }
                else {
                    res.send(true);
                }
            });
        });
        this.app.post('/awnserInput', function (req, res) {
            req.body = Object.keys(req.body);
            req.body = JSON.parse(req.body[0]);
            var q_id = req.body.q_id;
            var q_name = req.body.q_name;
            var a_name = req.body.a_name;
            var content = req.body.content;
            console.log(req);
            console.log("main", req.body.loginid);
            var sql = 'insert into awnser values(0,?,?,?,?,0)';
            var sql2 = 'update question set awn_count = awn_count + 1 where q_id = ' + q_id;
            let logS = true;
            conn.query(sql, [q_id, q_name, a_name, content], function (err, data) {
                if (err) {
                    console.log("에러남", err);
                    res.send(false);
                }
                else {
                    conn.query(sql2, function () {
                        if (err)
                            console.log("조회수 에러");
                    });
                    res.send(true);
                }
            });
        });
        this.app.post('/awnserList', function (req, res) {
            req.body = Object.keys(req.body);
            req.body = JSON.parse(req.body[0]);
            var q_id = req.body.q_id;
            //console.log(req);
            console.log("main", req.body);
            var sql = 'select * from awnser where q_id = ?';
            conn.query(sql, [q_id], function (err, data) {
                if (err)
                    console.log("에러남", err);
                var string = JSON.stringify(data);
                var json = JSON.parse(string);
                res.send(json);
            });
        });
        //  this.app.post('/upload', upload, function(req:any, res){
        //     res.send('Upload'+req.file);
        //     console.log(req.file);
        //  })
        this.app.post('/upload', upload.single('avatar'), (req, res) => {
            console.log('UPLOAD SUCCESS!', req.file);
            res.json({ success: true, file: req.file });
        });
        // var sql = 'INSERT INTO topic (title, description, author) VALUES("Express", "Web framework", "jacob")';
        // conn.query(sql, function(err, rows, fields){
        //     if(err) console.log(err);
        //     console.log(rows.insertId); // insertId는 auto_increment설정해 놓았다.(고유한 식별자를 알아낼 수 있는 방법이다.)
        // });
    }
    routes() {
    }
    static bootstrap() {
        return new Server();
    }
    ;
}
exports.Server = Server;
Server.bootstrap();
