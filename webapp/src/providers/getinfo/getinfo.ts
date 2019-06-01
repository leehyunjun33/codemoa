import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

 @Injectable({providedIn: 'root'})
export class GetinfoProvider {
  SERVER_PATH: any = 'http://ec2-13-209-164-128.ap-northeast-2.compute.amazonaws.com:3000';
  constructor(public http: HttpClient) {
    // console.log('Hello InfoProvider Provider');
  }

  getUser() {
    return new Promise(resolve => {
        this.http.get(this.SERVER_PATH + '/user', { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
        subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMyQuestion(m_email : any) {
    return new Promise(resolve => {
        this.http.get(this.SERVER_PATH + '/myQuestion?m_email='+m_email, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
        subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getQDetail(q_id:any){
    return new Promise(resolve => {
      this.http.get(this.SERVER_PATH + '/user/question?q_id='+q_id, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }

  getLogin (form:any) {
    let id = form.id;
    let pass = form.pw;

    console.log(id, pass);
    

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/login', JSON.stringify({ 'loginid': id, 'loginpw': pass }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

getRegister (form:any) {
  let email = form.m_email;
  let pass = form.m_password;
  let name = form.m_name

  console.log(email, pass, name);
  

  return new Promise(resolve => {
    this.http.post(this.SERVER_PATH + '/register', JSON.stringify({ 'm_email': email, 'm_password': pass, 'm_name': name }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
    subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

  getQuestion(form:any){
    let name = form.name;
    let email = form.email;
    let title = form.title;
    let content = form.content;
    let category = form.category;

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/questInput', JSON.stringify({ 'name': name, 'email': email, 'title': title, 'content': content, 'category': category}), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
    
  }

  getAwnser(form:any){
    let q_id = form.q_id;
    let q_name = form.q_name;
    let m_name = form.m_name;
    let content = form.content;

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/awnserInput', JSON.stringify({ 'q_id': q_id, 'q_name': q_name, 'a_name': m_name, 'content': content }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }

  getAwnserList(form:any){
    let q_id = form.q_id;

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/awnserList', JSON.stringify({ 'q_id': q_id , 'temp': 'temp'}), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }
}
