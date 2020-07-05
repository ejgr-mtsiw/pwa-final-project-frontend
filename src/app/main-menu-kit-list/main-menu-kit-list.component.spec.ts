import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuKitListComponent } from './main-menu-kit-list.component';

describe('MainMenuKitListComponent', () => {
  let component: MainMenuKitListComponent;
  let fixture: ComponentFixture<MainMenuKitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuKitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuKitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
