import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../model/producto-interface';

@Injectable({
  providedIn: 'root'
})

export class AjaxService {

  constructor(
    private oHttpClient: HttpClient
  ) { }

  getOne(id: number): Observable<IProducto> {
    return this.oHttpClient.get<IProducto>("http://localhost:8082/producto/" + id);
  }

}
