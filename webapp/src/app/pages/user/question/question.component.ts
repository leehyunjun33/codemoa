import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './question.component.html'
})
export class QuestionComponent {
  subtitle: string;
  constructor() {
    this.subtitle = 'quest';
    console.log(this.subtitle);

  }
  ngAfterViewInit() {}
}
