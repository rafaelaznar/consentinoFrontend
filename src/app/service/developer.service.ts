import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDeveloper } from '../model/developer-interface';
import { IPage } from '../model/generic-types-interface';


@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private oHttp: HttpClient) { }

  private entityURL = '/developer';

  getDevelopersPlist(page: number, size: number, termino: string, id_usertype: number): Observable<IPage<IDeveloper>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_usertype != 0) {
      params = params.set("usertype", id_usertype);
    }

    let url: string = `${environment.baseURL}${this.entityURL}`;
    return this.oHttp.get<IPage<IDeveloper>>(url, { params: params });
  }

}
