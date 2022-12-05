import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectPlistAdminRoutedComponent } from './proyect-plist-admin-routed.component';

describe('ProyectPlistAdminRoutedComponent', () => {
  let component: ProyectPlistAdminRoutedComponent;
  let fixture: ComponentFixture<ProyectPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
