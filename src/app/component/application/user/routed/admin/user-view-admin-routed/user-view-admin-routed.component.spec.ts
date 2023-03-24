import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAdminRoutedComponent } from './user-view-admin-routed.component';

describe('UserViewAdminRoutedComponent', () => {
  let component: UserViewAdminRoutedComponent;
  let fixture: ComponentFixture<UserViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
