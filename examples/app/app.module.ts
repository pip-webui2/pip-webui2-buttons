import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule,MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PipThemesModule } from 'pip-webui2-themes';
//import { PipTestModule } from './pip-webui2-buttons';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

import { DrilldownListExampleModule } from './drilldown-list-example/drilldown-list-example.module';
import { ActionListExampleModule } from './action-list-example/action-list-example.module';
import { ToggleButtonsExampleModule } from './toggle-buttons-example/toggle-buttons-example.module';
import { FabSpeedDialExampleModule } from './fab-speed-dial-example/fab-speed-dial-example.module';

import { ActionListExampleComponent } from './action-list-example/action-list-example.component';
import { DrilldownListExampleComponent } from './drilldown-list-example/drilldown-list-example.component';
import { ToggleButtonsExampleComponent } from './toggle-buttons-example/toggle-buttons-example.component';
import { FabSpeedDialExampleComponent } from './fab-speed-dial-example/fab-speed-dial-example.component';

const appRoutes: Routes = [
  { path: 'drilldown_list', component: DrilldownListExampleComponent },
  { path: 'action_list', component: ActionListExampleComponent },
  { path: 'toggle_buttons', component: ToggleButtonsExampleComponent },
  { path: 'fab_speed_dial', component: FabSpeedDialExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'drilldown_list' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    
    PipThemesModule,

    ExampleListModule,
    DrilldownListExampleModule,
    ActionListExampleModule,
    ToggleButtonsExampleModule,
    FabSpeedDialExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 