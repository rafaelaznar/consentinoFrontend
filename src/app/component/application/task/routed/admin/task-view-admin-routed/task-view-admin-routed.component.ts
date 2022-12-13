import { ITask } from 'src/app/model/task-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-view-admin-routed',
  templateUrl: './task-view-admin-routed.component.html',
  styleUrls: ['./task-view-admin-routed.component.css']
})
export class TaskViewAdminRoutedComponent implements OnInit {

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
