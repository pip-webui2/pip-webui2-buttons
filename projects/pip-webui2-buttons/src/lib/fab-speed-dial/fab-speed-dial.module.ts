import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipFabSpeedDialComponent } from './fab-speed-dial.component';
import { PipFabSpeedDialActionsComponent } from './fab-speed-dial-actions.component';
import { PipFabSpeedDialTriggerComponent } from './fab-speed-dial-trigger.component';

const COMPONENTS = [PipFabSpeedDialComponent, PipFabSpeedDialActionsComponent, PipFabSpeedDialTriggerComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class PipFabSpeedDialModule { }
