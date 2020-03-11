import { Component, AfterViewInit,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';
@Component({

   templateUrl: './search.component.html',
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
export class SearchComponent implements AfterViewInit {
  subtitle: string;
  data: any;
  questionList : any = [];
  lectureList : any = [];
  loginId: string = '';
  loginPw: string = '';
  data2: any;
  constructor(private getinfoProvider: GetinfoProvider, private router: Router, private location2: Location, private route: ActivatedRoute) {
    
    this.subtitle = 'search';
    console.log(this.subtitle);

  }

  qDetail(question: any){
    console.log('왜 안되는거야2222',question);

    this.router.navigate(['/user/question', question]);
    
  }

  lDetail(lecture: any){
    this.router.navigate(['/lecture/lectureDetail', lecture]);
    
  }

  ngOnInit() {
    let qdata = this.route.params.subscribe(params =>{

      console.log("searchParams", params);

      // if(params[0] != this.data){
      //   this.data = params[0];
      //   window.location.reload();
          
      // }
      this.data = params[0];
      console.log("searchText",this.data);

      if (self.name != 'reload') {
        self.name = 'reload';
        this.data = "";
        self.location.reload(true);
      }else self.name = ''; 

    })

    //this.data = this.route.snapshot.params['searchText'];

    console.log("searchText", this.route);


    this.getinfoProvider.getSearchQuestList({searchText: this.data}).then(
      data => {
        let res: any = data;
           this.questionList = res;


           console.log("questionList", this.questionList);
            
      }
    );

    this.getinfoProvider.getSearchLectureList({searchText: this.data}).then(
      data => {
        let res: any = data;
           this.lectureList = res;


           console.log("lectureList", this.lectureList);
            
      }
    );



  }

  ngAfterViewInit() {

    // $(function(){
    //   if (self.name != 'reload') {
    //     self.name = 'reload';
    //     self.location.reload(true);
    // }
    // else self.name = ''; 
    // })
  }

}
