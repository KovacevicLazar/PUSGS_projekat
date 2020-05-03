import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineDescriptionComponent } from './airline-description.component';

describe('AirlineDescriptionComponent', () => {
  let component: AirlineDescriptionComponent;
  let fixture: ComponentFixture<AirlineDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
