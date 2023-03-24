import { HomeComponent } from './component/shared/routed/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { UserPlistAdminRoutedComponent } from './component/application/user/routed/admin/user-plist-admin-routed/user-plist-admin-routed.component';
import { UserViewAdminRoutedComponent } from './component/application/user/routed/admin/user-view-admin-routed/user-view-admin-routed.component';
import { UserRemoveAdminRoutedComponent } from './component/application/user/routed/admin/user-remove-admin-routed/user-remove-admin-routed.component';
import { UserNewAdminRoutedComponent } from './component/application/user/routed/admin/user-new-admin-routed/user-new-admin-routed.component';
import { UserEditAdminRoutedComponent } from './component/application/user/routed/admin/user-edit-admin-routed/user-edit-admin-routed.component';
import { UsertypePlistAdminRoutedComponent } from './component/application/usertype/routed/admin/usertype-plist-admin-routed/usertype-plist-admin-routed.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'logout', component: LogoutComponent },  
  { path: 'admin/user/plist', component: UserPlistAdminRoutedComponent },
  { path: 'admin/user/plist/:page', component: UserPlistAdminRoutedComponent },
  { path: 'admin/user/plist/:page/:size', component: UserPlistAdminRoutedComponent },
  { path: 'admin/user/plist/:page/:size/:filter', component: UserPlistAdminRoutedComponent },  
  { path: 'admin/user/plist/:page/:size/:filter/:order/:id_usertype', component: UserPlistAdminRoutedComponent },
  { path: 'admin/user/plist/:page/:size/:filter/:order/:direction/:id_usertype', component: UserPlistAdminRoutedComponent },
  { path: 'admin/user/plist/usertype/:id_usertype', component: UserPlistAdminRoutedComponent },  
  { path: 'admin/user/view/:id', component: UserViewAdminRoutedComponent },
  { path: 'admin/user/remove/:id', component: UserRemoveAdminRoutedComponent},
  { path: 'admin/user/new', component: UserNewAdminRoutedComponent},
  { path: 'admin/user/edit/:id', component: UserEditAdminRoutedComponent},
  { path: 'admin/usertype/plist', component: UsertypePlistAdminRoutedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
