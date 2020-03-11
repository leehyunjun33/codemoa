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

  getChooseQuest() {
    return new Promise(resolve => {
        this.http.get(this.SERVER_PATH + '/chooseQuest', { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
        subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getLectureList(){
    return new Promise(resolve => {
        this.http.get(this.SERVER_PATH + '/lectureList', { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
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

  getMyChooseAwnsers(m_email : any) {
    return new Promise(resolve => {
        this.http.get(this.SERVER_PATH + '/myChooseAnwser?m_email='+m_email, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
        subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMyLecture(m_email : any) {
    return new Promise(resolve => {
        this.http.get(this.SERVER_PATH + '/myLecture?m_email='+m_email, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
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
  let name = form.m_name;
  let c_name = form.c_name;
  let m_img = form.m_img;

  console.log(email, pass, name);
  

  return new Promise(resolve => {
    this.http.post(this.SERVER_PATH + '/register', JSON.stringify({ 'm_email': email, 'm_password': pass, 'm_name': name, 'c_name': c_name, 'm_img': m_img }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
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

  setMemo(form:any){
    let id = form.id;
    let email = form.email;
    let content = form.content;
    let l_id = form.l_id;

    console.log("a");

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/setMemo', JSON.stringify({ 'id': id, 'email': email, "content":content, 'l_id': l_id}), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
    
  }

  getMemo(form:any){
    let m_id = form.m_id;
    let l_id = form.l_id;
    

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/getMemo', JSON.stringify({ 'm_id': m_id, 'l_id': l_id}), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
    
  }

  chooseAwnser(email:any, a_id:any, q_id:any){
    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/chooseAwnser', JSON.stringify({ 'email': email, 'a_id': a_id, 'q_id': q_id}), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }

  bookmark(form:any){
    let q_email = form.q_email;
    let a_email = form.a_email;

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/insertBookmark', JSON.stringify({ 'q_email': q_email, 'a_email': a_email}), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }

  getBookmark(email:any){
    return new Promise(resolve => {
      this.http.get(this.SERVER_PATH + '/myBookmark?m_email='+email, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
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
    let email = form.email;

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/awnserInput', JSON.stringify({ 'q_id': q_id, 'q_name': q_name, 'a_name': m_name, 'content': content, 'email': email }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
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

  getCreatLecture(form:any){
    let l_title = form.l_title;
    let l_intro = form.l_intro;
    let c_name = form.c_name;
    let l_imgname = form.l_imgname;
    let email = form.email;
    let name = form.name;

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/creatLecture', JSON.stringify({ 'l_title': l_title , 'l_intro': l_intro, 'c_name': c_name, 'l_imgname': l_imgname, 'email': email, 'name': name }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }

  getSearchQuestList(form:any){
    let searchText = form.searchText;

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/searchQuestList', JSON.stringify({ 'searchText': searchText , 'temp': 'temp'}), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }

  getSearchLectureList(form:any){
    let searchText = form.searchText;

    return new Promise(resolve => {
      this.http.post(this.SERVER_PATH + '/searchLectureList', JSON.stringify({ 'searchText': searchText , 'temp': 'temp'}), { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).
      subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
  }


}
