import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPlistAdminRoutedComponent } from './help-plist-admin-routed.component';

describe('HelpPlistAdminRoutedComponent', () => {
  let component: HelpPlistAdminRoutedComponent;
  let fixture: ComponentFixture<HelpPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
