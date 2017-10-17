import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule} from '@angular/material';

import { PipButtonToggleGroupComponent } from './button-toggle-group.component';

@NgModule({
  declarations: [
    PipButtonToggleGroupComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonToggleModule
  ],
  exports: [
    PipButtonToggleGroupComponent
  ],
  providers: [],
})
export class PipButtonToggleGroupModule { }