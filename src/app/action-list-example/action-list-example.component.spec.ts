import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionListExampleComponent } from './action-list-example.component';

describe('ActionListExampleComponent', () => {
  let component: ActionListExampleComponent;
  let fixture: ComponentFixture<ActionListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionListExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
