import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {DoCheckParentComponent} from './do-check-parent/do-check-parent.component';
import {DoCheckComponent} from './do-check/do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    DoCheckParentComponent,
    DoCheckComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
