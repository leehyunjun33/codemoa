import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './lecture.component.html'
})
export class LectureComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'lecture';
    console.log(this.subtitle);

  }

  dbcall() {
    console.log("db 불러");
    
  }
  ngAfterViewInit() {}
}
