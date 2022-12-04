import { Component } from '@angular/core';
import { IProject } from 'src/app/model/project-interface';
import { faEye, faUserPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProyectService } from 'src/app/service/proyect.service';
import { ProjectResponse } from '../../../../../../model/project-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Project } from 'src/app/model/resolution-interface';


@Component({
    selector: 'app-proyect-plist-admin-routed',
    templateUrl: './proyect-plist-admin-routed.component.html',
    styleUrls: ['./proyect-plist-admin-routed.component.css']
})
export class ProyectPlistAdminRoutedComponent {

    private pListContent!: IProject[];
    private pagesCount!: number;
    private numberPage: number = 0;
    private pageRegister: number = 5;
    private termino: string = "";

    faEye = faEye;
    faUserPen = faUserPen;
    faTrash = faTrash;

    constructor(
        private oProyectService: ProyectService
    ) { }

    ngOnInit() {
        this.getPage();
    }

    getPage() {
        this.oProyectService.getProjectPlist(this.numberPage, this.pageRegister, this.termino)
          .subscribe({
            next: (resp: ProjectResponse) => {
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

      getPlistContent(): IProject[] {
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
