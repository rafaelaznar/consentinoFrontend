import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HelpResponse } from '../model/help-interface';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private oHttp: HttpClient) { }

  private entityURL = '/help';

  getHelpsPlist(page: number, size: number, termino: string): Observable<HelpResponse> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);

    let url: string = `${environment.baseURL}${this.entityURL}`;
    return this.oHttp.get<HelpResponse>(url, { params: params });
  }

}
