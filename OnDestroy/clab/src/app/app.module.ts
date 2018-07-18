import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {SpyParentComponent} from './spy-parent/spy-parent.component';
import {SpyDirective} from './spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpyParentComponent,
    SpyDirective,
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
