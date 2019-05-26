import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './portpolio.component.html'
})
export class PortpolioComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'portpolio';
    console.log(this.subtitle);

  }

  dbcall() {
    console.log("db 불러");
    
  }
  ngAfterViewInit() {}
}
