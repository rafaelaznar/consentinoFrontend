import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/model/project-interface';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-view-admin-routed',
  templateUrl: './project-view-admin-routed.component.html',
  styleUrls: ['./project-view-admin-routed.component.css']
})
export class ProjectViewAdminRoutedComponent implements OnInit {

  
  id: number = 0;
  oProject: IProject = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oProjectService: ProjectService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oProjectService.getOne(this.id).subscribe({
      next: (data: IProject) => {
        this.oProject = data;
        console.log(data);
      }
    })
  }


}
