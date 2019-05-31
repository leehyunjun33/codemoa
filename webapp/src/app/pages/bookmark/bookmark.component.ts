import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './bookmark.component.html'
})
export class BookmarkComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'bookmark';
    console.log(this.subtitle);

  }

  ngAfterViewInit() {}
}
