import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { GetinfoProvider } from '../../../providers/getinfo/getinfo';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'user Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'user Page' }
      ]
    },
    component: UserComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [UserComponent]
})
export class UserModule {}
