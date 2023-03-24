
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/model/user-interface';


@Component({
  selector: 'app-user-view-admin-routed',
  templateUrl: './user-view-admin-routed.component.html',
  styleUrls: ['./user-view-admin-routed.component.css']
})
export class UserViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }


}
