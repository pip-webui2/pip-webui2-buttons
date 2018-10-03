import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipActionListComponent } from './action-list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [PipActionListComponent],
  declarations: [PipActionListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PipActionListModule { }
