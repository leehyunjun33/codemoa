import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MemberProfileComponent } from './memberProfile.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'memberProfile Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'memberProfile Page' }
      ]
    },
    component: MemberProfileComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [MemberProfileComponent]
})
export class MemberProfileoModule {}
