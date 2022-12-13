/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResolutionRemoveAdminRoutedComponent } from './resolution-remove-admin-routed.component';

describe('ResolutionRemoveAdminRoutedComponent', () => {
  let component: ResolutionRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<ResolutionRemoveAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolutionRemoveAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
