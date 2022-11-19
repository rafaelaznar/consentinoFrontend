import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HelpService } from 'src/app/service/help.service';
import { faEye, faUserPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Help, HelpResponse } from 'src/app/model/help-interface';

@Component({
  selector: 'app-help-plist-admin-routed',
  templateUrl: './help-plist-admin-routed.component.html',
  styleUrls: ['./help-plist-admin-routed.component.css']
})
export class HelpPlistAdminRoutedComponent implements OnInit {

  private pListContent!: Help[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oHelpService: HelpService
  ) { }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oHelpService.getHelpsPlist(this.numberPage, this.pageRegister, this.termino)
      .subscribe({
        next: (resp: HelpResponse) => {
          this.pListContent = resp.content;
          console.log(this.pListContent);
          this.pagesCount = resp.totalPages;
          this.numberPage = resp.number;
          console.log("pagina", this.numberPage);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  getPageNumber(): number {
    return this.numberPage;
  }

  getPlistContent(): Help[] {
    return this.pListContent;
  }

  getpagesCount(): number {
    return this.pagesCount;
  }

  setPage(e: number) {
    this.numberPage = e - 1;
    this.getPage();
  }

  getPageRegister(): number {
    return this.pageRegister;
  }

  setRpp(registerPage: number) {
    this.pageRegister = registerPage;
    this.getPage();
  }

  setFilter(termino: string): void {
    this.termino = termino;
    this.numberPage = 0;
    this.getPage();
  }



}

