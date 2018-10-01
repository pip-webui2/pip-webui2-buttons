import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipDrilldownListComponent } from './drilldown-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PipDrilldownListComponent],
  exports: [PipDrilldownListComponent]
})
export class PipDrilldownListModule { }
