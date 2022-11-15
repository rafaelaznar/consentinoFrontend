import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-plist-admin-routed',
  templateUrl: './developer-plist-admin-routed.component.html',
  styleUrls: ['./developer-plist-admin-routed.component.css']
})
export class DeveloperPlistAdminRoutedComponent implements OnInit {

  heroes = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
