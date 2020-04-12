import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfRentACarComponent } from './admin-of-rent-a-car.component';

describe('AdminOfRentACarComponent', () => {
  let component: AdminOfRentACarComponent;
  let fixture: ComponentFixture<AdminOfRentACarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOfRentACarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOfRentACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
