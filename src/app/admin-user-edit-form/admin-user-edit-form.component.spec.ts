import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserEditFormComponent } from './admin-user-edit-form.component';

describe('AdminUserEditFormComponent', () => {
  let component: AdminUserEditFormComponent;
  let fixture: ComponentFixture<AdminUserEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
