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

  constructor(private router: Router, private route: ActivatedRoute, public getinfoProvider: GetinfoProvider, private location: Location) {
    this.subtitle = 'lectureDetail';
    console.log(this.subtitle);

  
  }


  ngAfterViewInit() {
    $(function(){
      

    })
  }

  ngOnInit(): void {
    let qdata = this.route.params.subscribe(params =>{
      console.log('params2',params);
      
      this.lecture = params;
    })
    
  }
}
