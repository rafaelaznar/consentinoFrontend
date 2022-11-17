import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypePlistAdminRoutedComponent } from './usertype-plist-admin-routed.component';

describe('UsertypePlistAdminRoutedComponent', () => {
  let component: UsertypePlistAdminRoutedComponent;
  let fixture: ComponentFixture<UsertypePlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertypePlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertypePlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
