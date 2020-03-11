import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
@Component({
  templateUrl: './bookmark.component.html',

})
export class BookmarkComponent implements AfterViewInit {
  subtitle: string;
  data: any = [];
  m_img: any;
  constructor(private router: Router, private getinfoProvider: GetinfoProvider) {
    this.subtitle = 'bookmark';
    console.log(this.subtitle);

  }

  ngAfterViewInit() {
    var email = sessionStorage.getItem("email");

    this.getinfoProvider.getBookmark(email).then(
      data => {
        let res: any = data;
           this.data = res;
      }
    );
    

  }

  memberProfile(member: any){
    member.m_password = null;
    this.router.navigate(['/memberProfile', member]);
  }

  ngOnInit(): void {


    $(function(){
      //var t_color = $('.bookmark_card').css("backgroundColor")

      setTimeout(function() {
        $('.bookmark_card').hover(function() {
          // border-radius: 50%;
          $(this).css("background-color", "beige");
        }, function(){
          $(this).css("background-color", "white");
        });
      }, 500);


      
    })

    if(!sessionStorage.getItem("email")){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/bookmark']);
    } 

    
     
  }
}
