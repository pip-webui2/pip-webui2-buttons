import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';

//import { PipTestModule } from './pip-webui2-buttons';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

import { DrilldownListExampleModule } from './drilldown-list-example/drilldown-list-example.module';
import { ActionListExampleModule } from './action-list-example/action-list-example.module';
import { ToggleButtonsExampleModule } from './toggle-buttons-example/toggle-buttons-example.module';

import { ActionListExampleComponent } from './action-list-example/action-list-example.component';
import { DrilldownListExampleComponent } from './drilldown-list-example/drilldown-list-example.component';
import { ToggleButtonsExampleComponent } from './toggle-buttons-example/toggle-buttons-example.component';

const appRoutes: Routes = [
  { path: 'action_list', component: ActionListExampleComponent },
  { path: 'drilldown_list', component: DrilldownListExampleComponent },
  { path: 'toggle_buttons', component: ToggleButtonsExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'action_list' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,

    ExampleListModule,
    DrilldownListExampleModule,
    ActionListExampleModule,
    ToggleButtonsExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 