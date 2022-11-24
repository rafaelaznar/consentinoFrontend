import { Resolution } from 'src/app/model/resolution-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ResolutionService } from 'src/app/service/resolution.service';

@Component({
    selector: 'app-resolution-remove-admin-routed',
    templateUrl: './resolution-remove-admin-routed.component.html',
    styleUrls: ['./resolution-remove-admin-routed.component.css']
})
export class ResolutionRemoveAdminRoutedComponent implements OnInit {

    id: number = 0;
    oResolution: Resolution = null;
    msg: string = "";

    constructor(
        protected oLocation: Location,
        private oActivatedRoute: ActivatedRoute,
        private oResolutionService: ResolutionService
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

    removeOne() {
        this.oResolutionService.removeOne(this.id).subscribe({
            next: (data: number) => {
                this.msg = "Resolution " + this.id + " removed";
                //open bootstrap modal here
                alert(this.msg);
                this.oLocation.back();
            }
        })
    }
}
