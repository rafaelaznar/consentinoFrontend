import { IDeveloper2Form, IDeveloper2Send } from './../model/developer-interface';
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

  private entityURL = '/developer';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${environment.baseURL}${this.entityURL}`;
  }

  getDevelopersPlist(page: number, size: number, termino: string, id_usertype: number, strSortField: string, strOrderDirection: string): Observable<IPage<IDeveloper>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_usertype != 0) {
      params = params.set("usertype", id_usertype);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IDeveloper>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IDeveloper> {
    return this.oHttp.get<IDeveloper>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oDeveloper2Form: IDeveloper2Form): Observable<number> {
    let oDeveloper2Send: IDeveloper2Send = {
      id: oDeveloper2Form.id.value,
      name: oDeveloper2Form.name.value,
      surname: oDeveloper2Form.surname.value,
      lastname: oDeveloper2Form.lastname.value,
      username: oDeveloper2Form.username.value,
      email: oDeveloper2Form.email.value,
      team: oDeveloper2Form.team.value,
      usertype: oDeveloper2Form.usertype.value
    }
    return this.oHttp.put<number>(this.url, oDeveloper2Send);
  }

  newOne(oDeveloper2Form: IDeveloper2Form): Observable<number> {    
    let oDeveloper2Send: IDeveloper2Send = {
      id: 0,
      name: oDeveloper2Form.name.value,
      surname: oDeveloper2Form.surname.value,
      lastname: oDeveloper2Form.lastname.value,
      username: oDeveloper2Form.username.value,
      email: oDeveloper2Form.email.value,
      team: oDeveloper2Form.team.value,
      usertype: oDeveloper2Form.usertype.value
    }
    return this.oHttp.post<number>(this.url, oDeveloper2Send);
  }

}
