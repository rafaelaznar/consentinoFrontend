import { HttpErrorResponse } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp, faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { IProject } from 'src/app/model/project-interface';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-plist-admin-routed',
  templateUrl: './project-plist-admin-routed.component.html',
  styleUrls: ['./project-plist-admin-routed.component.css']
})
export class ProjectPlistAdminRoutedComponent implements OnInit {

  responseFromServer: IPage<IProject>;

  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  //
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    private oProjectService: ProjectService
  ) { }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oProjectService.getProjectsPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IProject>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }
}
