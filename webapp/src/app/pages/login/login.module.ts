import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'login Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'login Page' }
      ]
    },
    component: LoginComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent]
})
export class LoginModule {}
