import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { commandesComponent } from './commandes.component';

describe('commandesComponent', () => {
  let component: commandesComponent;
  let fixture: ComponentFixture<commandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ commandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(commandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
