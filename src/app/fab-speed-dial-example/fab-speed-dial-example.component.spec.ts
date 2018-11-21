import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatSlideToggleModule
} from '@angular/material';
import { PipFabSpeedDialModule } from 'pip-webui2-buttons';

import { FabSpeedDialExampleComponent } from './fab-speed-dial-example.component';

describe('FabSpeedDialExampleComponent', () => {
  let component: FabSpeedDialExampleComponent;
  let fixture: ComponentFixture<FabSpeedDialExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FabSpeedDialExampleComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatIconModule,
        MatButtonToggleModule,

        PipFabSpeedDialModule
      ],
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
