import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKitEventsCreateFormComponent } from './admin-kit-events-create-form.component';

describe('AdminKitEventsCreateFormComponent', () => {
  let component: AdminKitEventsCreateFormComponent;
  let fixture: ComponentFixture<AdminKitEventsCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKitEventsCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKitEventsCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
