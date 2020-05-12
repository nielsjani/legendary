import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegendaryComponent } from './legendary/legendary.component';
import { MarketComponent } from './legendary/market/market.component';
import { CityComponent } from './legendary/city/city.component';
import { InfobarComponent } from './legendary/infobar/infobar.component';
import { PlayerFieldComponent } from './legendary/player-field/player-field.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendaryComponent,
    MarketComponent,
    CityComponent,
    InfobarComponent,
    PlayerFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
