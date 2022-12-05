import { ITask } from 'src/app/model/task-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-remove-admin-routed',
  templateUrl: './task-remove-admin-routed.component.html',
  styleUrls: ['./task-remove-admin-routed.component.css']
})
export class TaskRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  oTask: ITask = null;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oTaskService: TaskService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oTaskService.getOne(this.id).subscribe({
      next: (data: ITask) => {
        this.oTask = data;
        console.log(data);
      }
    })
  }

  removeOne() {
    this.oTaskService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Task " + this.id + " removed";        
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      }
    })
  }

}
