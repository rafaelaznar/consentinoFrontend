import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewAdminRoutedComponent } from './project-view-admin-routed.component';

describe('ProjectViewAdminRoutedComponent', () => {
  let component: ProjectViewAdminRoutedComponent;
  let fixture: ComponentFixture<ProjectViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
