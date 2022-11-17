import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usertype, UsertypeResponse } from 'src/app/model/usertype-response-interface';
import { UsertypeService } from 'src/app/service/usertype.service';

@Component({
  selector: 'app-usertype-plist-admin-routed',
  templateUrl: './usertype-plist-admin-routed.component.html',
  styleUrls: ['./usertype-plist-admin-routed.component.css']
})
export class UsertypePlistAdminRoutedComponent implements OnInit {

  constructor( private oUserTypeService: UsertypeService  ) { }

  private pListContent!: Usertype[];
  private pagesCount!: number;
  private numberPage : number= 0;
  private pageRegister: number = 5;

  ngOnInit(): void {
    this.getPlist();
  }

  getPlist(){
    this.oUserTypeService.getUsersTypePlist(this.numberPage, this.pageRegister)
    .subscribe({
      next: (resp : UsertypeResponse) =>{
        this.pListContent = resp.content;
        this.pagesCount = resp.totalPages;
      },
      error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    })
  }

  getPlistContent(): Usertype[]{
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

}
