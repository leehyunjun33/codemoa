import { Component, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { GetinfoProvider } from '../../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';

@Component({
  templateUrl: './lectureDetail.component.html'
})
export class LectureDetailComponent implements AfterViewInit{
  subtitle: string;
  lecture : any = [];
  email : any;
  id : any;
  memo: any = [];

  constructor(private router: Router, private route: ActivatedRoute, public getinfoProvider: GetinfoProvider, private location: Location) {
    this.subtitle = 'lectureDetail';
    console.log(this.subtitle);


  
  }


  ngAfterViewInit() {
    // this.getinfoProvider.getMemo({m_id: this.id, l_id: this.lecture.l_id}).then(
    //   data => {
    //     let res: any = data;

    //       this.memo = res;

    //        console.log('메모불러오기22222', this.memo.me_content);
          
    //   }
    // );
    
  }

  setMemo(){
    
    var memo = $("#lectureMemo").val();

    this.getinfoProvider.setMemo({id: this.id, l_id: this.lecture.l_id, email: this.email, content: memo}).then(
      data => {
        let res: any = data;

           console.log('메모저장');
          
      }
    );
    
    alert("저장완료");

  }
  ngOnInit(): void {

    this.email = sessionStorage.getItem("email");
    this.id = sessionStorage.getItem("id");

    let qdata = this.route.params.subscribe(params =>{
      console.log('params2',params);
      
      this.lecture = params;
    })

   // this.getMemo(this.id, this.lecture.l_id);

    


    
  }
}
