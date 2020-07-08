import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKitEditFormComponent } from './admin-kit-edit-form.component';

describe('AdminKitEditFormComponent', () => {
  let component: AdminKitEditFormComponent;
  let fixture: ComponentFixture<AdminKitEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKitEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKitEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
