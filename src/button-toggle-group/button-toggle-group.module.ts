import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleGroup } from '@angular/material';

import { PipButtonToggleGroupComponent } from './button-toggle-group.component';

@NgModule({
  declarations: [
    PipButtonToggleGroupComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonToggleGroup
  ],
  exports: [
    PipButtonToggleGroupComponent
  ],
  providers: [],
})
export class PipButtonModule { }