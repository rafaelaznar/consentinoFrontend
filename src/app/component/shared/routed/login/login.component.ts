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
  oProduct: IProducto | null = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oHttpClient: HttpClient,
    private oAjaxService: AjaxService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.showProduct2();
  }

  showProduct() {
    this.oHttpClient.get<IProducto>("http://localhost:8082/producto/" + this.id)
      .subscribe((data: IProducto) => {
        console.log(data);
        this.oProduct = data;
      }, (error: HttpErrorResponse) => {
        console.log(error.status, error.statusText);
      })
  }

  showProduct2() {
    this.oAjaxService.getOne(this.id)
      .subscribe((data: IProducto) => {
        console.log(data);
        this.oProduct = data;
      }, (error: HttpErrorResponse) => {
        console.log(error.status, error.statusText);
      })

  }


}
