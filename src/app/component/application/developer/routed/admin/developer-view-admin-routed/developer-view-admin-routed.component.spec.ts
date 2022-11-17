import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperViewAdminRoutedComponent } from './developer-view-admin-routed.component';

describe('DeveloperViewAdminRoutedComponent', () => {
  let component: DeveloperViewAdminRoutedComponent;
  let fixture: ComponentFixture<DeveloperViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
