import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitReadingsComponent } from './kit-readings.component';

describe('KitReadingsComponent', () => {
  let component: KitReadingsComponent;
  let fixture: ComponentFixture<KitReadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitReadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
