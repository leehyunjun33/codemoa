import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PortpolioComponent } from './portpolio.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'portpolio Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'portpolio Page' }
      ]
    },
    component: PortpolioComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [PortpolioComponent]
})
export class PortpolioModule {}
