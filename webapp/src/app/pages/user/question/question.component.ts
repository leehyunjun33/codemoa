import { Component, AfterViewInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetinfoProvider } from '../../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';

@Component({

  templateUrl: './question.component.html',
  styles:[` .checkBtn { float : right; 
                        margin-left : 10px}

  }`]
})
export class QuestionComponent implements AfterViewInit{
  subtitle: string;
  data: any = [];
  emailCheck: any;
  awnList: any = [];

  constructor(private router: Router, private route: ActivatedRoute, public getinfoProvider: GetinfoProvider, private location: Location) {
    this.subtitle = 'quest';
    console.log(this.subtitle);

    this.emailCheck = sessionStorage.getItem("email");

  
  }


  awnser_input(form){
    var qid = this.data.q_id;
    var qname = this.data.m_name;
    var mname = sessionStorage.getItem("name");


    this.getinfoProvider.getAwnser({q_id: qid, q_name: qname, m_name: mname, content: form.value.a_content}).then(
      data => {
        let res: any = data;
           this.data = res;

           console.log(data);
            
           if(data){ 

            //this.location.go('/user');
            window.location.reload();

           }
      }
    );
  }



  ngAfterViewInit() {

    

    $(function(){
      $("#awnserF").hide();

      var email = $("#email_hidden").attr('value');

      $("#awnShow").on("click",function(){
        $("#noAwntitle").hide();
        $("#awnserF").show();
        $(this).hide();
        

      })

      if(!sessionStorage.getItem("email")){
        $("#awnShow").hide();
      }

      if(email == sessionStorage.getItem("email")){
        $(".checkBtn").hide();
      }

    })
  }

  ngOnInit(): void {
    
    let qdata = this.route.params.subscribe(params =>{
      console.log('params2',params);
      
      this.data = params;
    })
    //console.log('왓니2222222222222222222222222 ?', this.data);

    this.getinfoProvider.getAwnserList({q_id: this.data.q_id}).then(
      data => {
        let res: any = data;
           this.awnList = res;


           console.log("awnList", this.awnList);

           if(!data){
            $("#noAwntitle").hide();
           }
            
      }
    );
  }
}
