import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKitListComponent } from './admin-kit-list.component';

describe('AdminKitListComponent', () => {
  let component: AdminKitListComponent;
  let fixture: ComponentFixture<AdminKitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
