import { IUser2Send } from '../model/user-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IUser } from '../model/user-interface';
import { IPage } from '../model/model-interfaces';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private entityURL = '/user';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getPage(page: number, size: number, strSortField: string, strOrderDirection: string, filterWords: string, id_usertype: number): Observable<IPage<IUser>> {
    if (!page) {
      page = 0;
    }
    if (!size) {
      size = 10;
    }
    let params = new HttpParams()
      .set("page", page)
      .set("size", size);
    if (filterWords) {
      params = params.set('filter', filterWords.trim());
    }
    if (id_usertype && id_usertype != 0) {
      params = params.set("usertype", id_usertype);
    }
    if (strSortField) { //&sort=codigo,[asc|desc]
      if (strOrderDirection) {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IUser>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IUser> {
    return this.oHttp.get<IUser>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oUser2Send: IUser2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oUser2Send);
  }

  newOne(oUser2Send: IUser2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oUser2Send);
  }

}
