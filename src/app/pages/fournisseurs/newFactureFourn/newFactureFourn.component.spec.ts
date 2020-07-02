import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFactureFournComponent } from './newFactureFourn.component';

describe('NewFactureFournComponent', () => {
  let component: NewFactureFournComponent;
  let fixture: ComponentFixture<NewFactureFournComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFactureFournComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFactureFournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
