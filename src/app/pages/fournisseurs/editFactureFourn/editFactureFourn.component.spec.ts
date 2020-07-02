import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFactureFournComponent } from './editFactureFourn.component';

describe('EditFactureFournComponent', () => {
  let component: EditFactureFournComponent;
  let fixture: ComponentFixture<EditFactureFournComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFactureFournComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFactureFournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
