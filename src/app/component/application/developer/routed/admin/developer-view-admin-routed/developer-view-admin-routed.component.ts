import { IDeveloper } from 'src/app/model/developer-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeveloperService } from 'src/app/service/developer.service';

@Component({
  selector: 'app-developer-view-admin-routed',
  templateUrl: './developer-view-admin-routed.component.html',
  styleUrls: ['./developer-view-admin-routed.component.css']
})
export class DeveloperViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oDeveloper: IDeveloper = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }


}
