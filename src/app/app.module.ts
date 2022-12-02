import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DeveloperPlistAdminRoutedComponent } from './component/application/developer/routed/admin/developer-plist-admin-routed/developer-plist-admin-routed.component';
import { DeveloperViewAdminRoutedComponent } from './component/application/developer/routed/admin/developer-view-admin-routed/developer-view-admin-routed.component';
import { UsertypePlistAdminRoutedComponent } from './component/application/usertype/routed/admin/usertype-plist-admin-routed/usertype-plist-admin-routed.component';
import { PaginationComponent } from './component/shared/unrouted/pagination/pagination.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PaginationService } from './service/pagination.service';
import { TeamPlistAdminRoutedComponent } from './component/application/team/routed/admin/team-plist-admin-routed/team-plist-admin-routed.component';
import { HelpPlistAdminRoutedComponent } from './component/application/help/routed/admin/help-plist-admin-routed.component';
import { CryptoService } from './service/crypto.service';
import { DecodeService } from './service/decode.service';
import { TaskPlistAdminRoutedComponent } from './component/application/task/routed/admin/task-plist-admin-routed/task-plist-admin-routed.component';
import { DeveloperRemoveAdminRoutedComponent } from './component/application/developer/routed/admin/developer-remove-admin-routed/developer-remove-admin-routed.component';
import { DeveloperEditAdminRoutedComponent } from './component/application/developer/routed/admin/developer-edit-admin-routed/developer-edit-admin-routed.component';
import { ResolutionPlistAdminRoutedComponent } from './component/application/resolution/routed/admin/resolution-plist-admin-routed/resolution-plist-admin-routed.component';
import { DeveloperNewAdminRoutedComponent } from './component/application/developer/routed/admin/developer-new-admin-routed/developer-new-admin-routed.component';
import { ResolutionViewAdminRoutedComponent } from './component/application/resolution/routed/admin/resolution-view-admin-routed/resolution-view-admin-routed.component';
import { ResolutionRemoveAdminRoutedComponent } from './component/application/resolution/routed/admin/resolution-remove-admin-routed/resolution-remove-admin-routed.component';
import { ProjectPlistAdminRoutedComponent } from './component/application/project/routed/admin/project-plist-admin-routed/project-plist-admin-routed.component';
import { ProjectViewAdminRoutedComponent } from './component/application/project/routed/admin/project-view-admin-routed/project-view-admin-routed.component';
import { TaskViewAdminRoutedComponent } from './component/application/task/routed/admin/task-view-admin-routed/task-view-admin-routed.component';
import { TaskRemoveAdminRoutedComponent } from './component/application/task/routed/admin/task-remove-admin-routed/task-remove-admin-routed.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { DeveloperDetailAdminUnroutedComponent } from './component/application/developer/unrouted/admin/developer-detail-admin-unrouted/developer-detail-admin-unrouted.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,    
    DeveloperPlistAdminRoutedComponent,
    DeveloperViewAdminRoutedComponent,
    DeveloperRemoveAdminRoutedComponent,
    DeveloperEditAdminRoutedComponent,
    DeveloperNewAdminRoutedComponent,
    DeveloperDetailAdminUnroutedComponent,
    UsertypePlistAdminRoutedComponent,
    PaginationComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    TeamPlistAdminRoutedComponent,
    HelpPlistAdminRoutedComponent,
    ResolutionPlistAdminRoutedComponent,
    ResolutionViewAdminRoutedComponent,
    ResolutionRemoveAdminRoutedComponent,
    TaskPlistAdminRoutedComponent,
    ProjectPlistAdminRoutedComponent,
    ProjectViewAdminRoutedComponent,
    TaskViewAdminRoutedComponent,
    TaskRemoveAdminRoutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    CryptoService,
    DecodeService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
