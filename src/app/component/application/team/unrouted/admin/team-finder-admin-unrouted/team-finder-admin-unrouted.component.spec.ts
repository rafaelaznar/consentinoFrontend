import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPlistAdminRoutedComponent } from './team-finder-admin-unrouted.component';

describe('TeamPlistAdminRoutedComponent', () => {
  let component: TeamPlistAdminRoutedComponent;
  let fixture: ComponentFixture<TeamPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
