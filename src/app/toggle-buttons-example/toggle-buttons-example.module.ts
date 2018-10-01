import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { PipButtonToggleGroupModule } from 'pip-webui2-buttons';

import { ToggleButtonsExampleComponent } from './toggle-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    PipButtonToggleGroupModule
  ],
  declarations: [ToggleButtonsExampleComponent]
})
export class ToggleButtonsExampleModule { }
