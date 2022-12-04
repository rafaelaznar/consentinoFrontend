import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProjectResponse } from '../model/project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  constructor(private oHttp: HttpClient) { }

  private entityURL = '/project';

  getProjectPlist(page: number, size:number, termino: string) {
    let params = new HttpParams()
        .set("filter", termino)
        .set("page", page)
        .set("size", size);

        let url: string = `${environment.baseURL}${this.entityURL}`;
        return this.oHttp.get<ProjectResponse>(url, { params: params });
  }
}
