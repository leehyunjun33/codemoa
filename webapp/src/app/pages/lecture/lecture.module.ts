import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { LectureComponent } from './lecture.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'lecture Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'lecture Page' }
      ]
    },
    component: LectureComponent
  }
];

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [LectureComponent]
})
export class LectureModule {}
