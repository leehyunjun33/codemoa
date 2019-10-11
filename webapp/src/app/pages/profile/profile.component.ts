import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements AfterViewInit {
  subtitle: string;
  data :any = [];
  constructor(private getinfoProvider: GetinfoProvider, private router: Router, private loca: Location) {
    this.subtitle = 'profile';
    console.log(this.subtitle);




  }


  ngAfterViewInit() {

    var email = sessionStorage.getItem("email");
    var name = sessionStorage.getItem("name");
    var grade = sessionStorage.getItem("grade");
    

  }

  ngOnInit(): void {
      if(!sessionStorage.getItem("email")){
        this.router.navigate(['/login']);
    }else{
        this.router.navigate(['/profile']);
    } 
  }
  
}
