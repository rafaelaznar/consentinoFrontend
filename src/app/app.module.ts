import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './component/shared/unrouted/pagination/pagination.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { PaginationService } from './service/pagination.service';
import { CryptoService } from './service/crypto.service';
import { DecodeService } from './service/decode.service';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { FooterComponent } from './component/shared/unrouted/footer/footer.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { UserRemoveAdminRoutedComponent } from './component/application/user/routed/admin/user-remove-admin-routed/user-remove-admin-routed.component';
import { UserNewAdminRoutedComponent } from './component/application/user/routed/admin/user-new-admin-routed/user-new-admin-routed.component';
import { UserDetailAdminUnroutedComponent } from './component/application/user/unrouted/admin/user-detail-admin-unrouted/user-detail-admin-unrouted.component';
import { UserEditAdminRoutedComponent } from './component/application/user/routed/admin/user-edit-admin-routed/user-edit-admin-routed.component';
import { UserPlistAdminRoutedComponent } from './component/application/user/routed/admin/user-plist-admin-routed/user-plist-admin-routed.component';
import { UserViewAdminRoutedComponent } from './component/application/user/routed/admin/user-view-admin-routed/user-view-admin-routed.component';
import { UsertypePlistAdminRoutedComponent } from './component/application/usertype/routed/admin/usertype-plist-admin-routed/usertype-plist-admin-routed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,  
    FooterComponent,  
    UserPlistAdminRoutedComponent,
    UserViewAdminRoutedComponent,
    UserRemoveAdminRoutedComponent,
    UserEditAdminRoutedComponent,
    UserNewAdminRoutedComponent,
    UserDetailAdminUnroutedComponent,    
    UsertypePlistAdminRoutedComponent,
    PaginationComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
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
    PaginationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
