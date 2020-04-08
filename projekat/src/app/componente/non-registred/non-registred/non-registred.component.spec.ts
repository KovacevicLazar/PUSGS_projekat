import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRegistredComponent } from './non-registred.component';

describe('NonRegistredComponent', () => {
  let component: NonRegistredComponent;
  let fixture: ComponentFixture<NonRegistredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonRegistredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonRegistredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
