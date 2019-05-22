import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
    console.log(this.subtitle);
    
  }

  ngAfterViewInit() {}
}
