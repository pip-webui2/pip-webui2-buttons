import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { PipActionListModule } from 'pip-webui2-buttons';

import { ActionListExampleComponent } from './action-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,

    PipActionListModule
  ],
  declarations: [ActionListExampleComponent]
})
export class ActionListExampleModule { }
