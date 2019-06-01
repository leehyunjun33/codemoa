import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements AfterViewInit {
  subtitle: string;
  constructor(private router: Router) {
    this.subtitle = 'profile';
    console.log(this.subtitle);

    

  }


  ngAfterViewInit() {}

  ngOnInit(): void {
      if(!sessionStorage.getItem("email")){
        this.router.navigate(['/login']);
    }else{
        this.router.navigate(['/profile']);
    } 
  }
  
}
