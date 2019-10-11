import { Component, AfterViewInit } from '@angular/core';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements AfterViewInit {
  subtitle: string;
  data : any = [];

  apiUrl = 'http://ec2-13-209-164-128.ap-northeast-2.compute.amazonaws.com:3000';

  constructor(public getinfoProvider: GetinfoProvider, private location: Location, private http: HttpClient) {
    this.subtitle = 'register';
    console.log(this.subtitle);

  }

  registerInput(form, files: FileList){

    const formData = new FormData();
    formData.append('avatar', files[0]);

    this.data = formData.get('avatar');


    this.getinfoProvider.getRegister({m_email: form.value.m_email, m_password: form.value.m_password, m_name: form.value.m_name, c_name: form.value.category, m_img: this.data.name}).then(
      data => {
        let res: any = data;
           //this.data = res;

          //  this.http.post(`${this.apiUrl}/upload`, formData);
            
          //  if(data){ 
          //   alert("환영합니다.");

          //   this.location.go('/');
          //   window.location.reload();

          //  }

          this.http.post(`${this.apiUrl}/upload`, formData)
          .subscribe(res => {
            
            console.log("고생했다",res);
    
            alert("회원가입이 완료되었습니다.");
    
            this.location.go('/');
            window.location.reload();
            
    
          });


      }
    );
  }


  ngAfterViewInit() {}
}
