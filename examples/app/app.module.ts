import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';

import { PipTestModule } from './pip-webui2-buttons';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
 // { path: 'main', component: MainLayoutExampleComponent },
 // { path: 'document', component: DocumentLayoutExampleComponent },
 // { path: 'tiles', component: TilesLayoutExampleComponent },
  //{ path: 'menu', component: MainMenuLayoutExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    PipTestModule,

    ExampleListModule

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 