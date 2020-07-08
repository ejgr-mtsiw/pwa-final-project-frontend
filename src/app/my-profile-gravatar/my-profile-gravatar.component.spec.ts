import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileGravatarComponent } from './my-profile-gravatar.component';

describe('MyProfileGravatarComponent', () => {
  let component: MyProfileGravatarComponent;
  let fixture: ComponentFixture<MyProfileGravatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileGravatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileGravatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
