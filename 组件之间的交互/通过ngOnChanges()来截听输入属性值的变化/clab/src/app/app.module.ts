import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {VersionParentComponent} from './version-parent/version-parent.component';
import {VersionChildComponent} from './version-child/version-child.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionParentComponent,
    VersionChildComponent,
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
