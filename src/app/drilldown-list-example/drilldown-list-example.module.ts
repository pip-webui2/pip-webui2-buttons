import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { PipDrilldownListModule } from 'pip-webui2-buttons';

import { DrilldownListExampleComponent } from './drilldown-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,

    PipDrilldownListModule
  ],
  declarations: [DrilldownListExampleComponent],
  exports: [DrilldownListExampleComponent]
})
export class DrilldownListExampleModule { }
