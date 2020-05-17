import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRcInfoComponent } from './change-rc-info.component';

describe('ChangeRcInfoComponent', () => {
  let component: ChangeRcInfoComponent;
  let fixture: ComponentFixture<ChangeRcInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeRcInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
