import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { canusersComponent } from './canusers.component';

describe('canusersComponent', () => {
  let component: canusersComponent;
  let fixture: ComponentFixture<canusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ canusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(canusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
