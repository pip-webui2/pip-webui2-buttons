import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule} from '@angular/material';

import { PipButtonToggleGroupComponent } from './button-toggle-group.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonToggleModule
  ],
  declarations: [PipButtonToggleGroupComponent],
  exports: [PipButtonToggleGroupComponent]
})
export class PipButtonToggleGroupModule { }
