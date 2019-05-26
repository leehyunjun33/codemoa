import * as express from 'express';

const mysql = require('mysql');

const conn  = mysql.createConnection({
    host     : '127.0.0.1',        // host명
    user     : 'root',            // user명
    password : 'Root!0000',            // 해당 user의 password
    database : 'codemoa',            // DB명
    port : '3306'                // mysql 접속 port
});
 
// Connect To database (DB에 직접 연결하는 )
conn.connect(function(error:any) {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }
    console.log('connected as id ' + conn.threadId);
});

export class Server {



public app: express.Application;


// 사용할 포트


private PORT: number =  3000;



constructor() {


this.app = express();


this.config();


this.routes();

}




config() {


this.app.listen(this.PORT, () => {
    

this.app.use('/', express.static(__dirname + '/webapp'));

console.log(`Listening at http://localhost:${this.PORT}/`);


});


this.app.get('/user', function(req, res){
    var sql = 'select * from member';
    conn.query(sql, function(err:any, rows:any, fields:any){
           if(err) console.log(err);
        //    console.log('rows', rows); // insertId는 auto_increment설정해 놓았다.(고유한 식별자를 알아낼 수 있는 방법이다.)
            console.log('fields',fields);
            res.send(rows);
    });
  });
// var sql = 'INSERT INTO topic (title, description, author) VALUES("Express", "Web framework", "jacob")';
// conn.query(sql, function(err, rows, fields){
//     if(err) console.log(err);
//     console.log(rows.insertId); // insertId는 auto_increment설정해 놓았다.(고유한 식별자를 알아낼 수 있는 방법이다.)
// });






}


routes() {



}

public static bootstrap(): Server {


return new Server();


};


}
Server.bootstrap();