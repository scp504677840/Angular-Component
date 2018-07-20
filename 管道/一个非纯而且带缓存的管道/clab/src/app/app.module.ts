import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {FlyingHeroesPipe} from './flying-heroes.pipe';
import {FetchJsonPipe} from './fetch-json.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FetchJsonPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
