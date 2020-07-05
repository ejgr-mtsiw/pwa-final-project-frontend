import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKitReadingsComponent } from './admin-kit-readings.component';

describe('AdminKitReadingsComponent', () => {
  let component: AdminKitReadingsComponent;
  let fixture: ComponentFixture<AdminKitReadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKitReadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKitReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
