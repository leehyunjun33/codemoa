import * as express from 'express';

//import { GetinfoProvider } from '../webapp/src/providers/getinfo/getinfo';

const session = require('express-session');
const mysql = require('mysql');
var bodyParser = require('body-parser');
var MySQLStore = require('express-mysql-session')(session);

const conn  = mysql.createConnection({
    host     : '127.0.0.1',        // host명
    user     : 'root',            // user명
    password : 'Root!0000',            // 해당 user의 password
    database : 'codemoa',            // DB명
    port : '3306'                // mysql 접속 port
});


 
// Connect To database (DB에 직접 연결하는 )
// conn.connect(function(error:any) {
//     if (error) {
//         console.error('error connecting: ' + error.stack);
//         return;
//     }
//     console.log('connected as id ' + conn.threadId);
// });

module.exports=conn;