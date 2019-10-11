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

  bookmark(email: any){

    var email2 = sessionStorage.getItem("email");

    this.getinfoProvider.bookmark({q_email: email2, a_email : email}).then(
      data => {
        let res: any = data;
           this.data = res;

           console.log(data);
            
           if(data){ 

            //this.location.go('/user');
            alert("즐겨찾기를 하였습니다.")
            window.location.reload();

           }
      }
    );

  }

  chooseAwnser(email: any, a_id: any, q_id: any){
    this.getinfoProvider.chooseAwnser(email, a_id, q_id).then(
      data => {
        let res: any = data;
           this.data = res;

           console.log(data);
            
            this.location.go('/user');
            alert("채택하였습니다.")
            window.location.reload();
      }
    )
  }

  awnser_input(form){
    var qid = this.data.q_id;
    var qname = this.data.m_name;
    var mname = sessionStorage.getItem("name");
    var m_email = sessionStorage.getItem("email");


    this.getinfoProvider.getAwnser({q_id: qid, q_name: qname, m_name: mname, content: form.value.a_content, email: m_email}).then(
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

      //$("#content_replace").text().replaceAll("<br/>", "\r\n");
      //$("#content_replace").text(text);


      var str = $("#content_replace").text().replace("<br/>", "\r\n");
      $("#content_replace").text(str);

    })
  }

  ngOnInit(): void {
    
    let qdata = this.route.params.subscribe(params =>{
      console.log('params2',params);

      //.q_content = "test";

      console.log('test', params.q_content);

      //params.q_content = params.q_content.replaceAll("<br>", "\r\n");

      //console.log("바꼇냐",params.q_content);
      
      this.data = params;

      //this.data.q_content = "asdasd";

      

      console.log("testtest",this.data.q_content)

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
