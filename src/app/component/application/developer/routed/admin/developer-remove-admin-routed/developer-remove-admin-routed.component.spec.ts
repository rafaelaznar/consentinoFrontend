import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperRemoveAdminRoutedComponent } from './developer-remove-admin-routed.component';

describe('DeveloperRemoveAdminRoutedComponent', () => {
  let component: DeveloperRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<DeveloperRemoveAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperRemoveAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
