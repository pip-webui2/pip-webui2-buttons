import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, BREAKPOINTS, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionListExampleModule } from './action-list-example/action-list-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { DrilldownListExampleModule } from './drilldown-list-example/drilldown-list-example.module';
import { FabSpeedDialExampleModule } from './fab-speed-dial-example/fab-speed-dial-example.module';
import { ToggleButtonsExampleModule } from './toggle-buttons-example/toggle-buttons-example.module';

export const CustomBreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: [...DEFAULT_BREAKPOINTS]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,

    AppRoutingModule,
    ActionListExampleModule,
    ExamplesListModule,
    DrilldownListExampleModule,
    FabSpeedDialExampleModule,
    ToggleButtonsExampleModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
