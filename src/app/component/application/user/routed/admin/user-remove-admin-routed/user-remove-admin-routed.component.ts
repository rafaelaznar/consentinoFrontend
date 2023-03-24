import { IUser } from 'src/app/model/user-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from 'src/app/service/user.service';

declare let bootstrap: any;

@Component({
  selector: 'app-user-delete-admin-routed',
  templateUrl: './user-remove-admin-routed.component.html',
  styleUrls: ['./user-remove-admin-routed.component.css']
})

export class UserRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oUserService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "User " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }

}
