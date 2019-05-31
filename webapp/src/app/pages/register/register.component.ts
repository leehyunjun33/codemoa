import { Component, AfterViewInit } from '@angular/core';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';
@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements AfterViewInit {
  subtitle: string;
  data : any = [];
  constructor(public getinfoProvider: GetinfoProvider, private location: Location) {
    this.subtitle = 'register';
    console.log(this.subtitle);

  }

  registerInput(form){
    this.getinfoProvider.getRegister({m_email: form.value.m_email, m_password: form.value.m_password, m_name: form.value.m_name}).then(
      data => {
        let res: any = data;
           this.data = res;

           console.log(data);
            
           if(data){ 
            alert("환영합니다.");

            this.location.go('/');
            window.location.reload();

           }
      }
    );
  }


  ngAfterViewInit() {}
}
