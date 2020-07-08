import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKitEventsComponent } from './admin-kit-events.component';

describe('AdminKitEventsComponent', () => {
  let component: AdminKitEventsComponent;
  let fixture: ComponentFixture<AdminKitEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKitEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKitEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
