import { IProducto } from './../../../../model/producto-interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxService } from 'src/app/service/ajax.service.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  id: number = 0;
  oProduct: any | null = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oHttpClient: HttpClient,
    private oAjaxService: AjaxService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.showDeveloper2();
  }

  showDeveloper() {
    this.oHttpClient.get<any>("http://localhost:8082/developer/" + this.id)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.oProduct = data;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      })
  }

  showDeveloper2() {
    this.oAjaxService.getOne(this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.oProduct = data;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      })

  }


}
