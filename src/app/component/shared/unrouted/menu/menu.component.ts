import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  token: string | null = null;
  constructor(
    

  ) {
    this.token = localStorage.getItem("token");
    console.log("menu.component: token", this.token);    
  }

  ngOnInit() {
  }

}
