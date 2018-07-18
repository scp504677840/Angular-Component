import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NameParentComponent} from './name-parent/name-parent.component';
import {NameChildComponent} from './name-child/name-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NameParentComponent,
    NameChildComponent,
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
