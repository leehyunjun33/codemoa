import { Component, AfterViewInit } from '@angular/core';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements AfterViewInit {
  subtitle: string;
  constructor(private getinfoProvider: GetinfoProvider) {
    this.subtitle = 'This is some text within a card block.';
    console.log(this.subtitle);

  }
  dbcall() {
    this.getinfoProvider.getUser().then(
      data => {
        let res: any = data;
      }
    );
  }
  ngAfterViewInit() {}
}
