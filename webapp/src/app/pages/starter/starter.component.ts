import { Component, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;
  email: any;
  constructor() {
    this.subtitle = '바꼇다';
    console.log(this.subtitle);
   
    
  }

  ngAfterViewInit() {}
}
