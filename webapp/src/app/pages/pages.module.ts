import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './pages.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { NavigationComponent } from '../shared/header-navigation/navigation.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { UserComponent } from './user/user.component';
import { LectureComponent } from './lecture/lecture.component';
import { PortpolioComponent } from './portpolio/portpolio.component';
import { QuestionComponent } from './user/question/question.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LectureDetailComponent } from './lecture/lectureDetail/lectureDetail.component';
import { CreateLectureComponent } from './lecture/createLecture/createLecture.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('266477703969-q34vct58mtp5mtqqqag8maoavleue0j5.apps.googleusercontent.com')
  },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('561602290896109')
  // },
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   provider: new LinkedInLoginProvider("78iqy5cu2e1fgr")
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SocialLoginModule

    ],
    declarations: [
        PageComponent,
        NavigationComponent,
        SidebarComponent,
        BreadcrumbComponent,
        UserComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        LectureComponent,
        PortpolioComponent,
        QuestionComponent,
        RegisterComponent,
        BookmarkComponent,
        ProfileComponent,
        LoginComponent,
        LectureDetailComponent,
        CreateLectureComponent
    ],
    providers: [
        {
          provide: AuthServiceConfig,
          useFactory: provideConfig
        }
    ]
})
export class PagesModule { }
