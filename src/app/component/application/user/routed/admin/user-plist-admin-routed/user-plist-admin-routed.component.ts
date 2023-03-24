import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowDown, faArrowUp, faCircle, faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Constants } from 'src/app/model/constants';
import { IOrder } from 'src/app/model/model-interfaces';
import { IUserPage } from 'src/app/model/user-interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-plist-admin-routed',
  templateUrl: './user-plist-admin-routed.component.html',
  styleUrls: ['./user-plist-admin-routed.component.css']
})

export class UserPlistAdminRoutedComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faCircle=faCircle;
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.User
  strOperation: string = Constants.OPERATIONS.plist

  oPage: IUserPage;
  id_usertype: number = 0;

  constructor(
    private oUserService: UserService,
    private oActivatedRoute: ActivatedRoute,
  ) {
    this.oPage = {} as IUserPage;
    this.oPage.number = this.oActivatedRoute.snapshot.params['page'];
    this.oPage.size = this.oActivatedRoute.snapshot.params['size'];
    this.oPage.strFilter = this.oActivatedRoute.snapshot.params['filter'];
    if (!this.oPage.strFilter) {
      this.oPage.strFilter = '';
    }
    this.oPage.strSortField = this.oActivatedRoute.snapshot.params['order'];
    this.oPage.strSortDirection = this.oActivatedRoute.snapshot.params['direction'];
    this.id_usertype = this.oActivatedRoute.snapshot.params['id_usertype'];
  }

  ngOnInit() {
    this.getPage();
  }

  getPage = () => {
    this.oUserService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_usertype)
      .subscribe({
        next: (oPage: IUserPage) => {
          this.oPage = oPage;
          this.oPage.error = null;
          if (this.oPage.strFilter != null && this.oPage.strFilter != '') {
            this.oPage.strFilteredMessage = "Filtering by " + this.oPage.strFilter + ". "
          }
          if (this.id_usertype != 0) {
            this.oPage.strFilteredMessage = "Filtering by usertype " + this.id_usertype + "."
          }
          if (this.oPage.totalPages > 0) {
            if (this.oPage.number > this.oPage.totalPages - 1) {
              this.oPage.number = this.oPage.totalPages - 1;
              this.getPage();
            }
          }
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
        }
      })
  }

  setPage = (nPage: number) => {
    this.oPage.number = nPage - 1; //pagination component starts at 1, but spring data starts at 0
    this.getPage();
    return false;
  }

  setRpp(nRpp: number) {
    this.oPage.size = nRpp;
    this.getPage();
  }

  setFilter(strFilter: string) {
    this.oPage.strFilter = strFilter;
    this.getPage();
  }

  setOrder(order: string) {
    if (this.oPage.strSortDirection == 'asc') {
      this.oPage.strSortDirection = 'desc';
    } else if (this.oPage.strSortDirection == 'desc') {
      this.oPage.strSortDirection = '';
    } else {
      this.oPage.strSortDirection = 'asc';
    }
    this.oPage.strSortField = order;
    this.getPage();
  }

  /*
  getOrderUrl(order: string) {
    if (this.oPage.strSortDirection == 'asc') {
      this.oPage.strSortDirection = 'desc';
    } else if (this.oPage.strSortDirection == 'desc') {
      this.oPage.strSortDirection = '';
    } else {
      this.oPage.strSortDirection = 'asc';
    }
    this.oPage.strSortField = order;
    return this.getRoute();
  }

  getRoute() {
    if (!this.oPage.number) {
      this.oPage.number = 0;
    }
    if (!this.oPage.size) {
      this.oPage.size = 10;
    }
    if (!this.oPage.strFilter) {
      this.oPage.strFilter = '';
    }
    if (!this.oPage.strSortField) {
      this.oPage.strSortField = '';
    }
    if (!this.oPage.strSortDirection) {
      this.oPage.strSortDirection = '';

    }
    if (!this.id_usertype) {
      this.id_usertype = 0;
    }
    return "/" + this.oPage.number +"/"+ this.oPage.size+"/"+  this.oPage.strFilter+"/"+  this.oPage.strSortField+"/"+  this.oPage.strSortDirection+"/"+  this.id_usertype;
  }
  */

}
