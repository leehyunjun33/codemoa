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
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { LectureDetailComponent } from './lecture/lectureDetail/lectureDetail.component';
import { CreateLectureComponent } from './lecture/createLecture/createLecture.component';
import { ChooseQuestComponent } from './chooseQuest/chooseQuest.component';
import { MemberProfileComponent } from './memberProfile/memberProfile.component';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [
        PageComponent,
        NavigationComponent,
        SidebarComponent,
        BreadcrumbComponent,
        UserComponent,
        ChooseQuestComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        LectureComponent,
        PortpolioComponent,
        QuestionComponent,
        RegisterComponent,
        BookmarkComponent,
        MemberProfileComponent,
        LoginComponent,
        LectureDetailComponent,
        CreateLectureComponent,
        SearchComponent
    ]
})
export class PagesModule { }
