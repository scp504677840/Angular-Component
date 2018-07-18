import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {OnChangesParentComponent} from './on-changes-parent/on-changes-parent.component';
import {OnChangesComponent} from './on-changes/on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesParentComponent,
    OnChangesComponent,
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
