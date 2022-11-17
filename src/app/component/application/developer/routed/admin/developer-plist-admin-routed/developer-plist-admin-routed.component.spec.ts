/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeveloperPlistAdminRoutedComponent } from './developer-plist-admin-routed.component';

describe('DeveloperPlistAdminRoutedComponent', () => {
  let component: DeveloperPlistAdminRoutedComponent;
  let fixture: ComponentFixture<DeveloperPlistAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperPlistAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
