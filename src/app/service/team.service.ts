import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { TeamResponse } from '../model/team-interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private oHttp: HttpClient) { }

  private entityURL = '/team';

  getTeamsPlist(page: number, size: number, termino: string, id_usertype: number): Observable<TeamResponse> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_usertype != 0) {
      params = params.set("usertype", id_usertype);
    }

    let url: string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<TeamResponse>(url, { params: params });
  }

}
