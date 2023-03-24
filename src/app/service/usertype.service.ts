import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IUsertypePage } from '../model/usertype-interface';


@Injectable({
  providedIn: 'root'
})
export class UsertypeService {

  constructor(private oHttp: HttpClient) { }

  private entityURL: string = "/usertype";


  getPage(page: number, size: number, order: string, direction: string, filter: string): Observable<IUsertypePage> {
    let params = new HttpParams()
      .set("page", page)
      .set("size", size);
    if (order) {
      params = params.set('sort', order + ',' + direction);
    }
    if (filter) {
      params = params.set('filter', filter);
    }
    const url: string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<IUsertypePage>(url, { params: params });
  }
}
