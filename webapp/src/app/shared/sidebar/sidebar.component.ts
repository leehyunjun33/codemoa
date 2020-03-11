import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';
declare var $: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements AfterViewInit {
  // this is for the open close
  isActive = true;
  showMenu = '';
  showSubMenu = '';
  email = '';
  m_img = null;
  loginCheck: boolean = false;
  constructor(public router: Router, private location: Location) { 

    
    

  }


  logState(){

    if(!sessionStorage.getItem("email")){
      this.router.navigate(['/login']);
   
    }else{
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("point");
      sessionStorage.removeItem("grade");
      sessionStorage.removeItem("m_img");
      this.m_img = null;
      this.location.go('/');
      window.location.reload();
     
    }


    
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }
  eventCalled() {
    this.isActive = !this.isActive;
  }
  // End open close
  ngAfterViewInit() {

    

    $(function() {
      $('.sidebartoggler').on('click', function() {
        if ($('body').hasClass('mini-sidebar')) {
          $('body').trigger('resize');
          $('.scroll-sidebar, .slimScrollDiv')
            .css('overflow', 'hidden')
            .parent()
            .css('overflow', 'visible');
          $('body').removeClass('mini-sidebar');
          $('.navbar-brand span').show();
          // $(".sidebartoggler i").addClass("ti-menu");
        } else {
          $('body').trigger('resize');
          $('.scroll-sidebar, .slimScrollDiv')
            .css('overflow-x', 'visible')
            .parent()
            .css('overflow', 'visible');
          $('body').addClass('mini-sidebar');
          $('.navbar-brand span').hide();
          // $(".sidebartoggler i").removeClass("ti-menu");
        }
      });
    });
  }

  ngOnInit(): void {

    this.m_img = sessionStorage.getItem("m_img");
    
    console.log("사진 확인44", this.m_img);

    if(this.m_img == 'null'){
      var a = 'assets/images/users/ice.jpg';
      $("#user_img").attr('src', a);
      console.log("널입니다.");
    }else{
      $("#user_img").attr('src', 'assets/images/'+this.m_img);

      console.log("널이 아닙니다.", this.m_img);
    }


    if(!sessionStorage.getItem("email")){
      $('.user-profile').hide();
      $('#log').attr('title', 'Login');
    }else{
      
      $('#user_name').text(sessionStorage.getItem("name"));
      $('#log').attr('title', 'Logout');
    }

    this.email = sessionStorage.getItem("email");
    //this.m_img = sessionStorage.getItem("m_img");
    if(this.email){
      this.loginCheck = true;
    }
    else{
      this.loginCheck = false;
    }
    
  }
}
