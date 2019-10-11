import { Component, AfterViewInit,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';

// import { AuthService } from 'angularx-social-login';
// import { SocialUser } from 'angularx-social-login';
// import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
@Component({

   templateUrl: './login.component.html'
  // styles: [`#log_button {margin-right : 10px; float : left}
  //          .f1 {margin-bottom : 10px;
  //              margin-top : 25px;} 
  //          .reg {}   
  
  // `]
})
export class LoginComponent implements AfterViewInit {
  subtitle: string;
  data: any;
  loginId: string = '';
  loginPw: string = '';
  //user: SocialUser; ,private authService: AuthService
  constructor(private getinfoProvider: GetinfoProvider, private router: Router, private loca: Location) {
    
    this.subtitle = 'login';
    console.log(this.subtitle);

  }

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   console.log(user);
    // });
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  // }

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
            sessionStorage.setItem("point", res.m_point);
            sessionStorage.setItem("grade",res.m_grade);
            sessionStorage.setItem("m_img",res.m_img);

            //console.log(data);

            this.loca.go('/');
            window.location.reload();
            


           }else{
            alert("아이디와 비밀번호를 확인해주세요");
            this.loca.go('/login');
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
