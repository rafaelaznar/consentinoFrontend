import { Resolution, ResolutionResponse } from './../model/resolution-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResolutionService {

  constructor(
    private oHttpClient: HttpClient
  ) { }

  private entityURL = '/resolution';

  getOne(id: number): Observable<Resolution> {
    return this.oHttpClient.get<Resolution>("http://localhost:8082/resolution/2");
  }

  /* getPage(): Observable<IResolution> {
    return this.oHttpClient.get<IResolution>("http://localhost:8082/resolution?page=0&size=5");
  } */

  getPage(page: number, size: number, filter: string): Observable<ResolutionResponse> {
    let params = new HttpParams()
      .set("filter", filter)
      .set("page", page)
      .set("size", size);
    let url: string = `${environment.baseURL}${this.entityURL}`;
    return this.oHttpClient.get<ResolutionResponse>(url, { params: params });
  }
}
