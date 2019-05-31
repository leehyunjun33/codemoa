import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BookmarkComponent } from './bookmark.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'bookmark Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'bookmark Page' }
      ]
    },
    component: BookmarkComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [BookmarkComponent]
})
export class BookModule {}
