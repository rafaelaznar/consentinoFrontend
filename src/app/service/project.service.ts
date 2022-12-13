import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/generic-types-interface';
import { IProject } from '../model/project-interface';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private entityURL = '/project';
    url: string = ""
constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
 }

 getProjectsPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<IProject>> {
  let params = new HttpParams()
    .set("filter", termino)
    .set("page", page)
    .set("size", size);
  if (strSortField != "") { //&sort=codigo,[asc|desc]
    if (strOrderDirection != "") {
      params = params.set("sort", strSortField + "," + strOrderDirection);
    } else {
      params = params.set("sort", strSortField);
    }
  }
  return this.oHttp.get<IPage<IProject>>(this.url, { params: params });
}

  getOne(id: number): Observable<IProject> {
    return this.oHttp.get<IProject>(this.url + "/" + id);
  }


}
