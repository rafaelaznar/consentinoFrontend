import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resolution } from 'src/app/model/resolution-interface';
import { ResolutionService } from 'src/app/service/resolution.service';

@Component({
  selector: 'app-resolution-view-admin-routed',
  templateUrl: './resolution-view-admin-routed.component.html',
  styleUrls: ['./resolution-view-admin-routed.component.css']
})
export class ResolutionViewAdminRoutedComponent implements OnInit {

    id: number = 0;
    oResolution: Resolution = null;

    constructor(
      private oActivatedRoute: ActivatedRoute,
      private oResolutionService: ResolutionService,
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
      this.getOne();
    }

    getOne() {
      this.oResolutionService.getOne(this.id).subscribe({
        next: (data: Resolution) => {
          this.oResolution = data;
          console.log(data);
        }
      })
    }

}
