import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {}
