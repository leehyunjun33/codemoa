import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

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
    component: ProfileComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [ProfileComponent]
})
export class ProfileModule {}
