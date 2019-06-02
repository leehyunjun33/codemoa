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


      if(!sessionStorage.getItem("email")){
        $('#user_img').attr("src", "assets/images/users/logout.jpeg");
        $('#user_name').text(" ");
        $('#user_drop').hide();
        $('#log').attr("title", "Login");
      }else{
        $('#user_img').attr("src", "assets/images/users/ice.jpg");
        $('#user_name').text(sessionStorage.getItem("name"));
      }


    });



  }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("email");
    if(this.email){
      this.loginCheck = true;
    }
    else{
      this.loginCheck = false;
    }
    
  }
}
