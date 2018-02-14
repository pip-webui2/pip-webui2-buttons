import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatSlideToggleModule, MatRadioModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import {FabSpeedDialExampleComponent } from './fab-speed-dial-example.component';
import { PipFabSpeedDialModule } from '../pip-webui2-buttons';

@NgModule({
  declarations: [
   FabSpeedDialExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
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
  exports: [
   FabSpeedDialExampleComponent
  ],
  providers: [
    
  ],
})
export class FabSpeedDialExampleModule { }