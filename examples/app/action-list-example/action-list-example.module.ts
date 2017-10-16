import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { ActionListExampleComponent } from './action-list-example.component';
import { PipActionListModule } from '../pip-webui2-buttons';

@NgModule({
  declarations: [
    ActionListExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipActionListModule
  ],
  exports: [
    ActionListExampleComponent
  ],
  providers: [
    
  ],
})
export class ActionListExampleModule { }