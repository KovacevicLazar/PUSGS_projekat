import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingPageNavMenuComponent } from './starting-page-nav-menu.component';

describe('StartingPageNavMenuComponent', () => {
  let component: StartingPageNavMenuComponent;
  let fixture: ComponentFixture<StartingPageNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingPageNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingPageNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
