import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipFabSpeedDialComponent } from './fab-speed-dial.component';

describe('PipFabSpeedDialComponent', () => {
  let component: PipFabSpeedDialComponent;
  let fixture: ComponentFixture<PipFabSpeedDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipFabSpeedDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipFabSpeedDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
