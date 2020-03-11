"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const os = require('os');
const router = express.Router();
const session = require('express-session');
var bodyParser = require('body-parser');
var MySQLStore = require('express-mysql-session')(session);
const cors = require('cors');
const conn = require('../dbconnection');
const multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
const upload = multer({
    limits: { fileSize: 5 * 1024 * 1024 },
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'webapp/src/assets/images/'); // avatars 폴더에 파일을 저장한다.
        },
        filename(req, file, cb) {
            cb(null, file.originalname); // 전송된 파일 자신의 이름으로 파일을 저장한다.
        }
    })
});
router.post('/upload', upload.single('avatar'), (req, res) => {
    console.log('UPLOAD SUCCESS!', req.file);
    res.json({ success: true, file: req.file });
});
router.post('/creatLecture', function (req, res) {
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);
    var l_title = req.body.l_title;
    var l_intro = req.body.l_intro;
    var c_name = req.body.c_name;
    var l_imgname = req.body.l_imgname;
    var name = req.body.name;
    var email = req.body.email;
    var video = 'small.mp4';
    var sql = 'insert into lecture values(0,?,?,?,?,0,?,?,?)';
    conn.query(sql, [email, c_name, l_title, name, l_intro, l_imgname, video], function (err, data) {
        if (err) {
            console.log("강의생성에러", err);
            res.send(false);
        }
        else {
            res.send(true);
        }
    });
});
router.get('/lectureList', function (req, res, next) {
    var sql = 'select * from lecture';
    conn.query(sql, function (err, data) {
        if (err)
            console.log(err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        console.log('json: ', json);
        res.send(json);
    });
});
router.get('/myLecture', function (req, res, next) {
    var email = req.query.m_email;
    console.log("reqemail", email);
    var sql = 'select * from lecture where lm_email = ?';
    conn.query(sql, [email], function (err, data) {
        if (err)
            console.log(err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        console.log('json: ', json);
        res.send(json);
    });
});
router.post('/upload', upload.single('avatar'), (req, res) => {
    console.log('UPLOAD SUCCESS!', req.file);
    res.json({ success: true, file: req.file });
});
router.get('/user', function (req, res, next) {
    var sql = 'select *, date_format(q_date, "%Y-%m-%d") as "qq_date" from question where q_choose = 0';
    conn.query(sql, function (err, data) {
        if (err)
            console.log(err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        console.log('json: ', json);
        res.send(json);
    });
});
router.get('/chooseQuest', function (req, res, next) {
    var sql = 'select *, date_format(q_date, "%Y-%m-%d") as "qq_date" from question where q_choose = 1';
    conn.query(sql, function (err, data) {
        if (err)
            console.log(err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        console.log('json: ', json);
        res.send(json);
    });
});
router.get('/myQuestion', function (req, res, next) {
    var email = req.query.m_email;
    var sql = 'select *, date_format(q_date, "%Y-%m-%d") as "qq_date" from question where m_email = ?';
    conn.query(sql, [email], function (err, data) {
        if (err)
            console.log(err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        console.log('json: ', json);
        res.send(json);
    });
});
router.get('/myChooseAnwser', function (req, res, next) {
    var email = req.query.m_email;
    console.log("reqemail", email);
    var sql = 'select q.q_id, q.m_email, q.m_name, q.q_title, q.q_content, q.awn_count, q.c_name, q.q_choose from question q , awnser a where q.q_id = a.q_id and a.am_email = ? and a.a_choose = 1';
    conn.query(sql, [email], function (err, data) {
        if (err)
            console.log(err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        console.log('json: ', json);
        res.send(json);
    });
});
router.get('/user/question', function (req, res) {
    var q_id = req.query.q_id;
    var sql = 'select * from question where q_id = ?';
    var viewUp = 'update question set q_view = q_view + 1 where q_id = ?';
    conn.query(sql, [q_id], function (err, data) {
        if (err)
            console.log(err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        console.log('question: ', json);
        conn.query(viewUp, q_id, function (err, data) { });
        res.send(json);
    });
});
router.post('/login', function (req, res) {
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
router.post('/questInput', function (req, res) {
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
    var sql = 'insert into question values(0,?,?,?,?,0,?,0, now(), 0)';
    var sql2 = 'update member set m_point = m_point + 5 where m_email = ?';
    let logS = true;
    conn.query(sql, [email, name, title, content, category], function (err, data) {
        if (err) {
            console.log("에러남", err);
            res.send(false);
        }
        else {
            conn.query(sql2, email, function () {
                if (err)
                    console.log("점수 에러");
            });
            res.send(true);
        }
    });
});
router.post('/register', function (req, res) {
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);
    var name = req.body.m_name;
    var email = req.body.m_email;
    var password = req.body.m_password;
    var c_name = req.body.c_name;
    var grade = 'F';
    var m_img = req.body.m_img;
    console.log(req);
    console.log("main", req.body.m_name);
    var sql = 'insert into member values(0,?,?,?,0,?,?,?)';
    let logS = true;
    conn.query(sql, [email, password, name, grade, c_name, m_img], function (err, data) {
        if (err) {
            console.log("에러남", err);
            res.send(false);
        }
        else {
            res.send(true);
        }
    });
});
router.post('/setMemo', function (req, res) {
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);
    var id = req.body.id;
    var email = req.body.email;
    var content = req.body.content;
    var l_id = req.body.l_id;
    var sql = 'select * from memo where m_id = ? and l_id = ?';
    var sqlInsert = 'insert into memo values(0,?,?,?,?)';
    var sqlUpdate = 'update memo set me_content = ? where m_id = ? and l_id = ?';
    conn.query(sql, [id, l_id], function (err, data) {
        if (err) {
            console.log("메모 저장 에러", err);
            res.send(false);
        }
        else {
            console.log("메모데이터확인", data);
            if (data[0]) {
                conn.query(sqlUpdate, [content, id, l_id], function (err, data) { });
                console.log("메모업데이트");
            }
            else {
                conn.query(sqlInsert, [id, l_id, email, content], function (err, data) { });
                console.log("메모를 저장하였습니다.");
            }
            res.send(true);
        }
    });
});
router.post('/getMemo', function (req, res) {
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);
    var m_id = req.body.m_id;
    var l_id = req.body.l_id;
    var sql = 'select * from memo where m_id = ? and l_id = ?';
    conn.query(sql, [m_id, l_id], function (err, data) {
        if (err)
            console.log("에러남", err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        res.send(json);
    });
});
router.post('/awnserInput', function (req, res) {
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);
    var q_id = req.body.q_id;
    var q_name = req.body.q_name;
    var a_name = req.body.a_name;
    var content = req.body.content;
    var email = req.body.email;
    console.log(req);
    console.log("main", req.body.loginid);
    var sql = 'insert into awnser values(0,?,?,?,?,0,?)';
    var sql2 = 'update question set awn_count = awn_count + 1 where q_id = ' + q_id;
    let logS = true;
    conn.query(sql, [q_id, q_name, a_name, content, email], function (err, data) {
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
router.post('/awnserList', function (req, res) {
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
router.get('/myBookmark', function (req, res) {
    var email = req.query.m_email;
    var sql = 'select * from member where m_email in (select a_email from bookmark where q_email = ?)';
    conn.query(sql, [email], function (err, data) {
        if (err)
            console.log(err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        console.log('question: ', json);
        res.send(json);
    });
});
router.post('/insertBookmark', function (req, res) {
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);
    var q_email = req.body.q_email;
    var a_email = req.body.a_email;
    var sql = 'insert into bookmark values(0,?,?)';
    var bookmarkCheckSql = 'select * from bookmark where q_email = ? and a_email = ?';
    conn.query(bookmarkCheckSql, [q_email, a_email], function (err, data) {
        if (err) {
            console.log("북마크에러", err);
            res.send(false);
        }
        else {
            if (data[0]) {
                res.send(false);
            }
            else {
                conn.query(sql, [q_email, a_email]);
                res.send(true);
            }
        }
    });
});
router.post('/chooseAwnser', function (req, res) {
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);
    var email = req.body.email;
    var id = req.body.a_id;
    var q_id = req.body.q_id;
    //console.log(req);
    console.log("main", req.body);
    var sql = 'update awnser set a_choose = 1 where a_id=' + id;
    var sql1_question = 'update question set q_choose = 1 where q_id=' + q_id;
    var sql2 = 'update member set m_point = m_point + 30 where m_email = ?';
    var sql3_select = 'select m_point from member where m_email = ?';
    var sql4_gradeUpdate = 'update member set m_grade = ? where m_email = ?';
    conn.query(sql, function (err, data) {
        if (err)
            console.log("채택 에러", err);
        conn.query(sql1_question, function (err, data) { });
        conn.query(sql2, email, function (err, data) {
            if (err)
                console.log("채택 에러(멤버점수))", err);
            conn.query(sql3_select, email, function (err, data) {
                var string = JSON.stringify(data);
                var json = JSON.parse(string);
                var grade = 'F';
                console.log("몇점일까요22", json[0].m_point);
                if (json[0].m_point >= 1000) {
                    grade = 'A';
                }
                else if (json[0].m_point >= 800) {
                    grade = 'B';
                }
                else if (json[0].m_point >= 600) {
                    grade = 'C';
                }
                else if (json[0].m_point >= 30) {
                    grade = 'D';
                }
                conn.query(sql4_gradeUpdate, [grade, email], function (err, data) { });
                res.send(true);
            });
        });
    });
});
router.post('/searchQuestList', function (req, res) {
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);
    var searchText = req.body.searchText;
    var sql = 'select * from question where c_name = ? or q_content like "%' + searchText + '%" or q_title like "%' + searchText + '%"';
    conn.query(sql, [searchText], function (err, data) {
        if (err)
            console.log("search에러", err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        res.send(json);
    });
});
router.post('/searchLectureList', function (req, res) {
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);
    var searchText = req.body.searchText;
    var sql = 'select * from lecture where c_name = ?';
    conn.query(sql, [searchText], function (err, data) {
        if (err)
            console.log("search에러", err);
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        res.send(json);
    });
});
module.exports = router;
