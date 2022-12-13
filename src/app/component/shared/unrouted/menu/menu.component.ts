import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  strUserName: string = "";

  constructor(
    oSessionService: SessionService,
  ) {
    this.strUserName = oSessionService.getUserName();
  }

  ngOnInit() {
  }

}
