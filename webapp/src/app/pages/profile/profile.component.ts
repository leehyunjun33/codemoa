import { Component, AfterViewInit } from '@angular/core';
@Component({
  
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'profile';
    console.log(this.subtitle);

  }


  ngAfterViewInit() {}
}
