import * as express from 'express';
const os = require('os');
const router = express.Router();
const conn = require('../dbconnection');



router.get('/user', function(req, res, next){
    var sql = 'select * from question';
    conn.query(sql, function(err:any,data:any){
           if(err) console.log(err);

        var string = JSON.stringify(data)         
        var json = JSON.parse(string);
        console.log('json: ', json);
            
        res.send(json);
    });
  });

  router.get('/myQuestion', function(req: any, res, next){

    var email = req.query.m_email;

    console.log("reqemail", email);
    

    var sql = 'select * from question where m_email = ?';
    conn.query(sql,[email],function(err:any,data:any){
           if(err) console.log(err);

        var string = JSON.stringify(data)         
        var json = JSON.parse(string);
        console.log('json: ', json);
            
        res.send(json);
    });
  });

  router.get('/user/question', function(req:any, res){
    
    var q_id = req.query.q_id;

    var sql = 'select * from question where q_id = ?';
    conn.query(sql, [q_id], function(err:any,data:any){
        if(err) console.log(err);

        var string = JSON.stringify(data)         
        var json = JSON.parse(string);
        console.log('question: ', json);
            
        res.send(json);
    });
  });

  router.post('/login', function(req:any, res){
     req.body = Object.keys(req.body);
     req.body = JSON.parse(req.body[0]);
     //var array  = Object.keys(req.body);

     var email = req.body.loginid; 
     var pw = req.body.loginpw;

     console.log(req);
     console.log("main", req.body.loginid);
     

     var sql = 'select * from member where m_email = ?';
     let logS = true;
     

     conn.query(sql, [email], function(err:any, data:any){
        if(err)
            console.log("로그인 에러남", err);
        
        var string = JSON.stringify(data)         
        var json = JSON.parse(string);
        console.log('데이터값: ', json);

        if(!json[0]){
            logS = false;
            //res.render('user', { error: '로그인실패'});
            res.send(logS);
        
        }else if(json[0].m_password != pw){
            logS = false;
            res.send(logS);
            //res.redirect('/');
            console.log('로그인실패');
            
        }else if(json[0].m_password == pw){
            // req.session.email = email;
            // console.log('email저장됐니?', req.session.email);
           
            logS = true;

            

            console.log('로그인성공');
            res.send(json[0]);
            //res.redirect('/');
        }

     });      
  });

  router.post('/questInput', function(req:any, res){
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
    

    conn.query(sql, [email, name, title, content, category], function(err:any, data:any){
       if(err){
           console.log("에러남", err);
           res.send(false); 
       }else{
           res.send(true);
       }


    });      
 });
 
 router.post('/register', function(req:any, res){

    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);

    var name = req.body.m_name; 
    var email = req.body.m_email;
    var password = req.body.m_password;

    console.log(req);
    console.log("main", req.body.m_name);
    

    var sql = 'insert into member values(0,?,?,?)';
    let logS = true;
    

    conn.query(sql, [email, password, name], function(err:any, data:any){
       if(err){
           console.log("에러남", err);
           res.send(false); 
       }else{
           res.send(true);
       }


    });      
 });
 
 router.post('/awnserInput', function(req:any, res){
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);

    var q_id = req.body.q_id; 
    var q_name = req.body.q_name;
    var a_name = req.body.a_name;
    var content = req.body.content

    console.log(req);
    console.log("main", req.body.loginid);
    

    var sql = 'insert into awnser values(0,?,?,?,?,0)';
    var sql2 = 'update question set awn_count = awn_count + 1 where q_id = '+q_id;
    let logS = true;
    

    conn.query(sql, [q_id, q_name, a_name, content], function(err:any, data:any){
       if(err){
           console.log("에러남", err);
           res.send(false); 
       }else{

        conn.query(sql2, function(){
            if(err)
                console.log("조회수 에러");    
        });

           res.send(true);
       }


    });      
 });

 router.post('/awnserList', function(req:any, res){
    req.body = Object.keys(req.body);
    req.body = JSON.parse(req.body[0]);

    var q_id = req.body.q_id;

    //console.log(req);
    console.log("main", req.body);
    

    var sql = 'select * from awnser where q_id = ?';

    conn.query(sql, [q_id], function(err:any, data:any){
       if(err)
           console.log("에러남", err);

        var string = JSON.stringify(data)         
        var json = JSON.parse(string);

        res.send(json);
    });      
 });
module.exports = router;


