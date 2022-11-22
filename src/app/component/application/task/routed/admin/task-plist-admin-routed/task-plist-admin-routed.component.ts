import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task, TaskResponse } from 'src/app/model/task-interface';
import { TaskService } from 'src/app/service/task.service';
import { faEye, faUserPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-plist-admin-routed',
  templateUrl: './task-plist-admin-routed.component.html',
  styleUrls: ['./task-plist-admin-routed.component.css']
})
export class TaskPlistAdminRoutedComponent implements OnInit {

  private pListContent!: Task[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oTaskService: TaskService
  ) { }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oTaskService.getTasksPlist(this.numberPage, this.pageRegister, this.termino)
      .subscribe({
        next: (resp: TaskResponse) => {
          this.pListContent = resp.content;
          console.log(this.pListContent);
          this.pagesCount = resp.totalPages;
          this.numberPage = resp.number;
          console.log("pagina", this.numberPage);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  getPageNumber(): number {
    return this.numberPage;
  }

  getPlistContent(): Task[] {
    return this.pListContent;
  }

  getpagesCount(): number {
    return this.pagesCount;
  }

  setPage(e: number) {
    this.numberPage = e - 1;
    this.getPage();
  }

  getPageRegister(): number {
    return this.pageRegister;
  }

  setRpp(registerPage: number) {
    this.pageRegister = registerPage;
    this.getPage();
  }

  setFilter(termino: string): void {
    this.termino = termino;
    this.numberPage = 0;
    this.getPage();
  }

}
