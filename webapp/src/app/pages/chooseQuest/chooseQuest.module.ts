import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChooseQuestComponent } from './chooseQuest.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'chooseQuest Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'chooseQuest Page' }
      ]
    },
    component: ChooseQuestComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [ChooseQuestComponent]
})
export class ChooseQuestModule {}
