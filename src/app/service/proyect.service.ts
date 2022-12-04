import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProjectResponse, IProject } from '../model/project-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  constructor(private oHttp: HttpClient) { }

  private entityURL = '/project';
  private url: string= "";

  getProjectPlist(page: number, size:number, termino: string) {
    let params = new HttpParams()
        .set("filter", termino)
        .set("page", page)
        .set("size", size);

        let url: string = `${environment.baseURL}${this.entityURL}`;
        return this.oHttp.get<ProjectResponse>(url, { params: params });
  }
  getOne(id: number): Observable<IProject> {
    return this.oHttp.get<IProject>(this.url + "/" + id);
  }
}
