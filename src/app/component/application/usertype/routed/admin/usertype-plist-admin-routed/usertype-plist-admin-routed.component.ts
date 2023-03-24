import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/model/model-interfaces';
import { IUsertypePage } from 'src/app/model/usertype-interface';
import { UsertypeService } from 'src/app/service/usertype.service';

@Component({
  selector: 'app-usertype-plist-admin-routed',
  templateUrl: './usertype-plist-admin-routed.component.html',
  styleUrls: ['./usertype-plist-admin-routed.component.css']
})
export class UsertypePlistAdminRoutedComponent implements OnInit {

  constructor(private oUserTypeService: UsertypeService) { }


  oPage: IUsertypePage;

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oUserTypeService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter)
      .subscribe({
        next: (oPage: IUsertypePage) => {
          this.oPage = oPage;
          this.oPage.error = null;

          this.oPage.strFilteredMessage = "";

          if (this.oPage.totalPages > 0) {
            if (this.oPage.number > this.oPage.totalPages - 1) {
              this.oPage.number = this.oPage.totalPages - 1;
              this.getPage();
            }
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  onSetPage = (nPage: number) => {
    this.oPage.number = nPage - 1; //pagination component starts at 1, but spring data starts at 0
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    this.oPage.size = nRpp;
    this.getPage();
  }

  onSetFilter(strFilter: string) {
    this.oPage.strFilter = strFilter;
    this.getPage();
  }

  onSetOrder(order: IOrder) {
    this.oPage.strSortField = order.sortField;
    this.oPage.strSortDirection = order.sortDirection;
    this.getPage();
  }

}
