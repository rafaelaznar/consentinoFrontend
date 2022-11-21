import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDeveloper } from 'src/app/model/developer-interface';
import { DeveloperService } from 'src/app/service/developer.service';
import { faEye, faUserPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';

@Component({
  selector: 'app-developer-plist-admin-routed',
  templateUrl: './developer-plist-admin-routed.component.html',
  styleUrls: ['./developer-plist-admin-routed.component.css']
})

export class DeveloperPlistAdminRoutedComponent implements OnInit {

  responseFromServer: IPage<IDeveloper>;

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oDeveloperService: DeveloperService
  ) { }

  ngOnInit() {
    this.getPage();
  }

  getPage(numberPage = 0, pageRegister = 5, termino = "", id_usertype = 0) {
    this.oDeveloperService.getDevelopersPlist(numberPage, pageRegister, termino, id_usertype)
      .subscribe({
        next: (resp: IPage<IDeveloper>) => {
          this.responseFromServer = resp;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  setPage(e: number) {
    this.getPage(e - 1);
  }

  setRpp(rpp: number) {
    this.getPage(this.responseFromServer.number, rpp);
  }

  setFilter(termino: string): void {
    this.getPage(0, 5, termino);
  }

  setFilterByUsertype(id: number): void {
    this.getPage(0, this.responseFromServer.numberOfElements, "", id);
  }

}
