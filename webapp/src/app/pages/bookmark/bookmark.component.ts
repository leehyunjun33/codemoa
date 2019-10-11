import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
@Component({
  templateUrl: './bookmark.component.html'
})
export class BookmarkComponent implements AfterViewInit {
  subtitle: string;
  data: any = [];
  constructor(private router: Router, private getinfoProvider: GetinfoProvider) {
    this.subtitle = 'bookmark';
    console.log(this.subtitle);

    

  }

  ngAfterViewInit() {

  }

  ngOnInit(): void {

    var email = sessionStorage.getItem("email");

    this.getinfoProvider.getBookmark(email).then(
      data => {
        let res: any = data;
           this.data = res;
      }
    );




    if(!sessionStorage.getItem("email")){
      this.router.navigate(['/login']);
  }else{
      this.router.navigate(['/bookmark']);
  } 
    
  }
}
