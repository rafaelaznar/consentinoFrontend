import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Developer, DeveloperResponse } from 'src/app/model/developer-interface';
import { DeveloperService } from 'src/app/service/developer.service';
import { faEye, faUserPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-developer-plist-admin-routed',
  templateUrl: './developer-plist-admin-routed.component.html',
  styleUrls: ['./developer-plist-admin-routed.component.css']
})
export class DeveloperPlistAdminRoutedComponent implements OnInit {

  private pListContent!: Developer[];
  private pagesCount!: number;
  private numberPage : number= 0;
  private pageRegister: number = 5;
  private termino: string = "";

  placeHolder: string = "Buscar developer";
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor( private oDeveloperService: DeveloperService ) { }

  ngOnInit() {
    this.getPlist();
  }

  getPlist(){
    this.oDeveloperService.getDevelopersPlist(this.numberPage, this.pageRegister, this.termino)
    .subscribe({
      next: (resp : DeveloperResponse) =>{
        this.pListContent = resp.content;
        console.log(this.pListContent);
        this.pagesCount = resp.totalPages;
      },
      error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    })
  }

  getPlistContent(): Developer[]{
    return this.pListContent;
  }

  getpagesCount(): number{
    return this.pagesCount;
  }

  getNumberPage( e: number ){
    this.numberPage = e;
    this.getPlist();
  }

  getPageRegister():number{
    return this.pageRegister;
  }

  setPageRegister( registerPage: number ){
    this.pageRegister = registerPage;
    this.getPlist();
  }

  setTermino( termino:string):void{
    this.termino = termino;
    this.numberPage =0;
    this.getPlist();
  }

}
