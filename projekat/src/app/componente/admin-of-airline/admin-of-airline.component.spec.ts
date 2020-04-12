import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfAirlineComponent } from './admin-of-airline.component';

describe('AdminOfAirlineComponent', () => {
  let component: AdminOfAirlineComponent;
  let fixture: ComponentFixture<AdminOfAirlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOfAirlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOfAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
