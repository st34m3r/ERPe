import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureFournsComponent } from './FactureFourns.component';

describe('FactureFournsComponent', () => {
  let component: FactureFournsComponent;
  let fixture: ComponentFixture<FactureFournsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureFournsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureFournsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
