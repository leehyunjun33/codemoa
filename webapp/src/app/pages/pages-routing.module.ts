import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';
import { UserComponent } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'user',
        component: UserComponent 
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
