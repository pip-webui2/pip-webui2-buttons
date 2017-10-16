import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipActionListComponent } from './action-list.component';

@NgModule({
  declarations: [
    PipActionListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  exports: [
    PipActionListComponent
  ],
  providers: [],
})
export class PipActionListModule { }