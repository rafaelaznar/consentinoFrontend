import { Component, Input, OnInit } from '@angular/core';
import { IDeveloper } from 'src/app/model/developer-interface';
import { DeveloperService } from 'src/app/service/developer.service';

@Component({
  selector: 'app-developer-detail-admin-unrouted',
  templateUrl: './developer-detail-admin-unrouted.component.html',
  styleUrls: ['./developer-detail-admin-unrouted.component.css']
})
export class DeveloperDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oDeveloper: IDeveloper;

  constructor(
    private oDeveloperService: DeveloperService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oDeveloperService.getOne(this.id).subscribe({
      next: (data: IDeveloper) => {
        this.oDeveloper = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}
