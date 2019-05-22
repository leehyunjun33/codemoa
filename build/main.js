"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sys',
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
        this.app.listen(this.PORT, () => {
            this.app.use('/', express.static(__dirname + '/webapp'));
            var sql = 'select * from book_ex';
            conn.query(sql, function (err, rows, fields) {
                if (err)
                    console.log(err);
                console.log('rows', rows); // insertId는 auto_increment설정해 놓았다.(고유한 식별자를 알아낼 수 있는 방법이다.)
                console.log('fields', fields);
            });
            conn.end();
            console.log(`Listening at http://localhost:${this.PORT}/`);
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
