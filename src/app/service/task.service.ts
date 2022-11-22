import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskResponse } from '../model/task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private oHttp: HttpClient) { }

  private entityURL = '/task';

  getTasksPlist(page: number, size: number, termino: string): Observable<TaskResponse> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);

    let url: string = `${environment.baseURL}${this.entityURL}`;
    return this.oHttp.get<TaskResponse>(url, { params: params });
  }

}
