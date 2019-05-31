import { Component, AfterViewInit } from '@angular/core';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
declare var $: any;

@Component({
  templateUrl: './portpolio.component.html',
  styles: [`.myq { margin-bottom : 15px;}
  #my_question_table {
    border-collapse: separate;
    border-spacing: 1px;
    text-align: left;
    line-height: 1.5;
    border-top: 1px solid #ccc;
  margin : 20px 10px;
}
#my_question_table th {
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
}
#my_question_table td {
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
}`]
  
  
})
export class PortpolioComponent implements AfterViewInit {
  subtitle: string;
  data: any = [];
  
  constructor(private getinfoProvider: GetinfoProvider, private router: Router, private loca: Location) {
    this.subtitle = 'portpolio';
    console.log(this.subtitle);

    

  }

  qDetail(question: any){
    console.log('왜 안되는거야2222',question);

    this.router.navigate(['/user/question', question]);
    
  }


 

  ngAfterViewInit() {

    var email = sessionStorage.getItem("email");

    console.log("qemail", email);

    this.getinfoProvider.getMyQuestion(email).then(
      data => {
        let res: any = data;
           this.data = res;


           console.log("qdata",data);
           
      }
    );






    // $(function(){
    //   $("#loginF").hide();

    //   if(!sessionStorage.getItem("email")){
    //     $("#loginF").show();
    //     $(".loginPort").hide();
        
    //   }else{
    //     $("#loginF").hide();
    //     $("#log_please").hide();
    //   }
    // })
  }
}
