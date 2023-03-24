import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemoveAdminRoutedComponent } from './user-remove-admin-routed.component';

describe('UserRemoveAdminRoutedComponent', () => {
  let component: UserRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<UserRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
