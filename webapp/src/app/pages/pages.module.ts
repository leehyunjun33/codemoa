import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './pages.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { NavigationComponent } from '../shared/header-navigation/navigation.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { UserComponent } from './user/user.component';
@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    declarations: [
        PageComponent,
        NavigationComponent,
        SidebarComponent,
        BreadcrumbComponent,
        UserComponent,
        SIDEBAR_TOGGLE_DIRECTIVES
    ]
})
export class PagesModule { }
