import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSpeedDialExampleComponent } from './fab-speed-dial-example.component';

describe('FabSpeedDialExampleComponent', () => {
  let component: FabSpeedDialExampleComponent;
  let fixture: ComponentFixture<FabSpeedDialExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabSpeedDialExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSpeedDialExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
