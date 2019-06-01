import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';
import { UserComponent } from './user/user.component';
import { LectureComponent } from './lecture/lecture.component';
import { PortpolioComponent } from './portpolio/portpolio.component';
import { QuestionComponent } from './user/question/question.component';
import { RegisterComponent } from './register/register.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CreateLectureComponent } from './lecture/createLecture/createLecture.component';

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
        path: 'user/question',
        component: QuestionComponent
      },
      {
        path: 'lecture',
        component: LectureComponent
      },
      {
        path: 'lecture/createLecture',
        component: CreateLectureComponent
      },
      {
        path: 'portpolio',
        component: PortpolioComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'bookmark',
        component: BookmarkComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
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
