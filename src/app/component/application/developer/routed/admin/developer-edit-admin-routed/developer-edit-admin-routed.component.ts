import { IDeveloper2Send } from './../../../../../../model/developer-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDeveloper } from 'src/app/model/developer-interface';
import { DeveloperService } from 'src/app/service/developer.service';

@Component({
  selector: 'app-developer-edit-admin-routed',
  templateUrl: './developer-edit-admin-routed.component.html',
  styleUrls: ['./developer-edit-admin-routed.component.css']
})
export class DeveloperEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oDeveloper: IDeveloper = null;
  oDeveloper2Send: IDeveloper2Send = null;
  oForm: FormGroup<IDeveloper2Send>;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oDeveloperService: DeveloperService,
    private oFormBuilder: FormBuilder
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oDeveloperService.getOne(this.id).subscribe({
      next: (data: IDeveloper) => {
        this.oDeveloper = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          name: [data.name, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
          surname: [data.surname, [Validators.required, Validators.minLength(3)]]
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oDeveloper2Send = {
      id: new FormControl(this.oForm.value.id),
      name: new FormControl(this.oForm.value.name),
      surname: new FormControl(this.oForm.value.surname),
      lastname: new FormControl(this.oDeveloper.lastname),
      email: new FormControl(this.oDeveloper.email),
      username: new FormControl(this.oDeveloper.username),
      team: new FormControl({
        id: this.oDeveloper.team.id
      }),
      usertype: new FormControl({
        id: this.oDeveloper.usertype.id
      })
    }
    if (this.oForm.valid) {
      this.oDeveloperService.updateOne(this.oDeveloper2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          alert("Developer " + this.id + " updated");
          this.oRouter.navigate(['/admin/developer/view', this.id])
        }
      })
    }

  }


}
