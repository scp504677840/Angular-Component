import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {FlyingHeroesPipe} from './flying-heroes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
