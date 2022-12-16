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
  oDeveloper2Send: IDeveloper2Send = null;
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
          username: [data.username, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
          id_team: [data.team.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
          id_usertype: [data.usertype.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
        });
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oDeveloper2Send = {
      id: this.oForm.value.id,
      name: this.oForm.value.name,
      surname: this.oForm.value.surname,
      lastname: this.oForm.value.lastname,
      email: this.oForm.value.email,
      username: this.oForm.value.username,
      team: { id: this.oForm.value.id_team },
      usertype: { id: this.oForm.value.id_usertype }
    }
    if (this.oForm.valid) {
      this.oDeveloperService.updateOne(this.oDeveloper2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "ANDAMIO";
          this.modalContent = "Developer " + this.id + " updated";
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

  openModalFindTeam(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTeam"), { //pasar el myModal como parametro
      keyboard: false
    })    
    this.myModal.show()
    

  }

  openModalFindUsertype(): void {    

  }

}
