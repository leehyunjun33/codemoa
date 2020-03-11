import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'search Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'search Page' }
      ]
    },
    component: SearchComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [SearchComponent]
})
export class SearchModule {}
