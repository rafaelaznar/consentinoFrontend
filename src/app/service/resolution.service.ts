import { Resolution, ResolutionResponse } from './../model/resolution-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResolutionService {

    private entityURL = '/resolution';
    url: string = ""

    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }

  getPage(page: number, size: number, filter: string): Observable<ResolutionResponse> {
    let params = new HttpParams()
      .set("filter", filter)
      .set("page", page)
      .set("size", size);
    let url: string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<ResolutionResponse>(url, { params: params });
  }

  getOne(id: number): Observable<Resolution> {
    return this.oHttp.get<Resolution>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  /* updateOne(oDeveloper: IDeveloper2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oDeveloper);
  } */
}
