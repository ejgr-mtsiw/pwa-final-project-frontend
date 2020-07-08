import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserCreateFormComponent } from './admin-user-create-form.component';

describe('AdminUserCreateFormComponent', () => {
  let component: AdminUserCreateFormComponent;
  let fixture: ComponentFixture<AdminUserCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
