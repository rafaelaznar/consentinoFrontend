import { Resolution, ResolutionResponse } from './../../../../../../model/resolution-interface';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { ResolutionService } from 'src/app/service/resolution.service';

@Component({
    selector: 'app-resolution-plist-admin-routed',
    templateUrl: './resolution-plist-admin-routed.component.html',
    styleUrls: ['./resolution-plist-admin-routed.component.css']
})
export class ResolutionPlistAdminRoutedComponent implements OnInit {

    private pListContent!: Resolution[];
    private pagesCount!: number;
    private numberPage: number = 0;
    private size: number = 5;
    private filter: string = "";

    faEye = faEye;
    faUserPen = faUserPen;
    faTrash = faTrash;

    constructor(
        private oResolutionService: ResolutionService
    ) {

    }

    ngOnInit(): void {
        this.getPage();
    }

    getPage(): void {
        this.oResolutionService.getPage(this.numberPage, this.size, this.filter)
            .subscribe({
                next: (data: ResolutionResponse) => {
                    this.pListContent = data.content;
                    console.log(this.pListContent);
                    this.pagesCount = data.totalPages;
                    this.numberPage = data.number;
                    console.log("pagina", this.numberPage);
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error);
                    console.log(error.status, error.statusText);
                }
            });
    }

    getPageContent(): Resolution[] {
        return this.pListContent;
    }

    getPageNumber(): number {
        return this.numberPage;
    }

    getpagesCount(): number {
        return this.pagesCount;
    }

    setPage(e: number) {
        this.numberPage = e - 1;
        this.getPage();
    }

    getPageRegister(): number {
        return this.size;
    }

    setRpp(registerPage: number) {
        this.size = registerPage;
        this.getPage();
    }

    setFilter(filter: string): void {
        this.filter = filter;
        this.numberPage = 0;
        this.getPage();
    }

}
