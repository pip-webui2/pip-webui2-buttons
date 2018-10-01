import { NgModule } from '@angular/core';
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

@NgModule({
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
  declarations: [FabSpeedDialExampleComponent]
})
export class FabSpeedDialExampleModule { }
