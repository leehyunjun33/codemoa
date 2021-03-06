import { Component, AfterViewInit } from '@angular/core';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  templateUrl: './user.component.html',
  styles: [`#question_table {
    border-collapse: separate;
    border-spacing: 1px;
    text-align: left;
    line-height: 1.5;
    border-top: 1px solid #ccc;
  margin : 20px 10px;
}
#question_table th {
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
}
.th1{

}
.table_hover{
  padding-top: 5px;
  padding-bottom: 5px;
}
#question_table td {
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
}
`]
})
export class UserComponent implements AfterViewInit {
  subtitle: string;
  data: any = [];
  email: any;
  //qdata: any = [];
  constructor(public getinfoProvider: GetinfoProvider, private router:Router, private location: Location) {

    this.getinfoProvider.getUser().then(
      data => {
        let res: any = data;
           this.data = res;
      }
    );

    this.subtitle = 'useruser';
    console.log(this.subtitle);

  }

  qDetail(question: any){
    console.log('왜 안되는거야2222',question);

    this.router.navigate(['/user/question', question]);
    
  }

  showForm(){
    $("#question_table").hide();
    $("#questionF").show();
    $("#questButton").hide();
  }

  queust_input(form){

    var m_name = sessionStorage.getItem("name");
    var m_email = sessionStorage.getItem("email");

    var str = $('#q_textarea').val();

    //str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');

    $('#q_textarea').val(str);

    this.getinfoProvider.getQuestion({name: m_name, email: m_email, title: form.value.q_title, content: str, category : form.value.category}).then(
      data => {
        let res: any = data;
           this.data = res;

           console.log(data);

           
            
           if(data){ 
            alert("질문이 작성되었습니다.");

            this.location.go('/user');
            window.location.reload();
            


           }
      }
    );
  }
  ngAfterViewInit() {

    $(function(){
      $("#questionF").hide();

      setTimeout(function(){
        var textColor = $('.table_hover').css("color");

        $('.table_hover').hover(function() {
          $(this).css("color", "#BDBDBD");
        }, function(){
          $(this).css("color", textColor);
        });
      },500);
        


      

    });
    
    
  }
  
  ngOnInit(): void {

    this.email = sessionStorage.getItem("email");


    
    
  }
}
