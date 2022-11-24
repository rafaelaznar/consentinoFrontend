import { IDeveloper2Form, IDeveloper2Send } from './../../../../../../model/developer-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDeveloper } from 'src/app/model/developer-interface';
import { DeveloperService } from 'src/app/service/developer.service';
declare let bootstrap: any;
@Component({
  selector: 'app-developer-edit-admin-routed',
  templateUrl: './developer-edit-admin-routed.component.html',
  styleUrls: ['./developer-edit-admin-routed.component.css']
})
export class DeveloperEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oDeveloper: IDeveloper = null;
  oDeveloper2Form: IDeveloper2Form = null;
  oForm: FormGroup<IDeveloper2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

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
          surname: [data.surname, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
          lastname: [data.lastname, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
          email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          username: [data.username, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oDeveloper2Form = {
      id: new FormControl(this.oForm.value.id),
      name: new FormControl(this.oForm.value.name),
      surname: new FormControl(this.oForm.value.surname),
      lastname: new FormControl(this.oDeveloper.lastname),
      email: new FormControl(this.oForm.value.email),
      username: new FormControl(this.oDeveloper.username),
      team: new FormControl({
        id: this.oDeveloper.team.id
      }),
      usertype: new FormControl({
        id: this.oDeveloper.usertype.id
      })
    }
    if (this.oForm.valid) {
      this.oDeveloperService.updateOne(this.oDeveloper2Form).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle="ANDAMIO";
          this.modalContent="Developer " + this.id + " updated";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/developer/view', this.id])
    })
    this.myModal.show()
  }

}
