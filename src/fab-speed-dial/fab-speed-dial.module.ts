import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipFabSpeedDialComponent } from './fab-speed-dial.component';

import { PipFabSpeedDialActions } from './fab-speed-dial-actions.component';

import { PipFabSpeedDialTrigger } from './fab-speed-dial-trigger.component';

@NgModule({
  declarations: [
    PipFabSpeedDialComponent,
    PipFabSpeedDialActions,
    PipFabSpeedDialTrigger
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  exports: [
    PipFabSpeedDialComponent,
    PipFabSpeedDialActions,
    PipFabSpeedDialTrigger
  ],
  providers: [],
})
export class PipFabSpeedDialModule { }