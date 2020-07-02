import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcanuserComponent } from './newcanuser.component';

describe('NewcanuserComponent', () => {
  let component: NewcanuserComponent;
  let fixture: ComponentFixture<NewcanuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcanuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcanuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
