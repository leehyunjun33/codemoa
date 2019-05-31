import { Component, AfterViewInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetinfoProvider } from '../../../../providers/getinfo/getinfo';
import { Location } from '@angular/common';

@Component({

  templateUrl: './question.component.html'
})
export class QuestionComponent implements AfterViewInit{
  subtitle: string;

  constructor(private router: Router, private route: ActivatedRoute, public getinfoProvider: GetinfoProvider, private location: Location) {
    this.subtitle = 'quest';
    console.log(this.subtitle);

  
  }






  ngAfterViewInit() {
    $(function(){
      

    })
  }

  ngOnInit(): void {
    

  }
}
