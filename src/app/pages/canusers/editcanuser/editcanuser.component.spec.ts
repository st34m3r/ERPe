import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcanuserComponent } from './editcanuser.component';

describe('EditcanuserComponent', () => {
  let component: EditcanuserComponent;
  let fixture: ComponentFixture<EditcanuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcanuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcanuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
