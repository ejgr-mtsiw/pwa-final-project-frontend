import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKitCreateFormComponent } from './admin-kit-create-form.component';

describe('AdminKitCreateFormComponent', () => {
  let component: AdminKitCreateFormComponent;
  let fixture: ComponentFixture<AdminKitCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKitCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKitCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
