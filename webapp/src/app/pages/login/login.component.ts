import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';
@Component({

  templateUrl: './login.component.html',
  styles: [`#log_button {margin-right : 10px; float : left}
           .f1 {margin-bottom : 10px;
               margin-top : 25px;} 
           .reg {}   
  
  `]
})
export class LoginComponent implements AfterViewInit {
  subtitle: string;
  data: any;
  loginId: string = '';
  loginPw: string = '';
  constructor(private getinfoProvider: GetinfoProvider, private router: Router, private loca: Location) {
    
    this.subtitle = 'login';
    console.log(this.subtitle);

  }

  login(form){
    console.log(form);
    this.getinfoProvider.getLogin({id: form.value.email, pw: form.value.password}).then(
      data => {
        let res: any = data;

           console.log('data',res.m_email);
            
           if(data){ 
            alert(res.m_name+"님 안녕하세요");

            sessionStorage.setItem("email", res.m_email);
            sessionStorage.setItem("name", res.m_name);
            sessionStorage.setItem("id", res.m_id);

            //console.log(data);

            this.loca.go('/');
            window.location.reload();
            


           }else{
            alert("아이디와 비밀번호를 확인해주세요");
            this.loca.go('/');
            window.location.reload();
            
           }
           
      }
    );
}

  register(){

    this.router.navigate(['/register']);
    
  }

  ngAfterViewInit() {}
}
