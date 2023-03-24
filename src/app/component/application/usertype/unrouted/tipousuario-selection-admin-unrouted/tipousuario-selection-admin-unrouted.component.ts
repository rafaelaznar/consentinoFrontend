import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Constants } from 'src/app/model/constants';
import { IUsertypePage } from 'src/app/model/usertype-interface';
import { UsertypeService } from 'src/app/service/usertype.service';

@Component({
  selector: 'app-tipousuario-selection-admin-unrouted',
  templateUrl: './tipousuario-selection-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-selection-admin-unrouted.component.css'],
})

export class TipousuarioSelectionAdminUnroutedComponent implements OnInit {

  @Output() selection = new EventEmitter<number>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.usertype;
  strOperation: string = Constants.OPERATIONS.plist;
  oPage: IUsertypePage;

  constructor(
    private oUsertypeService: UsertypeService,

  ) {
    this.oPage = {} as IUsertypePage;
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage = () => {
    this.oUsertypeService
      .getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter)
      .subscribe({
        next: (oPage: IUsertypePage) => {
          this.oPage = oPage;
          this.oPage.error = null;

          if (this.oPage.strFilter !== null && this.oPage.strFilter !== undefined && this.oPage.strFilter !== "") {
            this.oPage.strFilteredMessage = 'Filtrando por ' + this.oPage.strFilter;
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
      }
      )
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

  onSelection(id: number) {
    this.selection.emit(id);
  }

  doSetOrder(order: string) {
    this.oPage.strSortField = order;
    if (this.oPage.strSortDirection == 'asc') {
      this.oPage.strSortDirection = 'desc';
    } else if (this.oPage.strSortDirection == 'desc') {
      this.oPage.strSortDirection = '';
    } else {
      this.oPage.strSortDirection = 'asc';
    }
    this.getPage();
  }

}