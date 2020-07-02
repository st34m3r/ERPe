import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpurchaseComponent } from './newpurchase.component';

describe('NewpurchaseComponent', () => {
  let component: NewpurchaseComponent;
  let fixture: ComponentFixture<NewpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
