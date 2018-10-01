import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldownListExampleComponent } from './drilldown-list-example.component';

describe('DrilldownListExampleComponent', () => {
  let component: DrilldownListExampleComponent;
  let fixture: ComponentFixture<DrilldownListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrilldownListExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldownListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
