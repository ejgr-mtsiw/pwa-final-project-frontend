import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKitDetailsComponent } from './admin-kit-details.component';

describe('AdminKitDetailsComponent', () => {
  let component: AdminKitDetailsComponent;
  let fixture: ComponentFixture<AdminKitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
