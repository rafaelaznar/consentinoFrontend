import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITask, ITaskResponse } from '../model/task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private entityURL = '/task';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${environment.baseURL}${this.entityURL}`;
  }


  getTasksPlist(page: number, size: number, termino: string): Observable<ITaskResponse> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);

    let url: string = `${environment.baseURL}${this.entityURL}`;
    return this.oHttp.get<ITaskResponse>(url, { params: params });
  }

  getOne(id: number): Observable<ITask> {
    return this.oHttp.get<ITask>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

}
