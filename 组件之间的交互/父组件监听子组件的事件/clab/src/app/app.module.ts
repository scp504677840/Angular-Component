import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {VoterComponent} from './voter/voter.component';
import {VoteTakerComponent} from './vote-taker/vote-taker.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    VoteTakerComponent,
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
