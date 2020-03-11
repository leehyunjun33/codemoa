import { Component, AfterViewInit } from '@angular/core';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  templateUrl: './chooseQuest.component.html',
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
export class ChooseQuestComponent implements AfterViewInit {
  subtitle: string;
  data: any = [];
  email: any;
  //qdata: any = [];
  constructor(public getinfoProvider: GetinfoProvider, private router:Router, private location: Location) {

    this.getinfoProvider.getChooseQuest().then(
      data => {
        let res: any = data;
           this.data = res;
      }
    );

    this.subtitle = 'chooseQuest';
    console.log(this.subtitle);

  }

  qDetail(question: any){
    console.log('왜 안되는거야2222',question);

    this.router.navigate(['/user/question', question]);
    
  }

  ngAfterViewInit() {

    $(function(){
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
