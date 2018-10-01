import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipFabSpeedDialActionsComponent } from './fab-speed-dial-actions.component';

describe('PipFabSpeedDialActionsComponent', () => {
  let component: PipFabSpeedDialActionsComponent;
  let fixture: ComponentFixture<PipFabSpeedDialActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipFabSpeedDialActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipFabSpeedDialActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
