import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/nav-bar/search-bar/search-bar.component';
import { MainBarComponent } from './components/nav-bar/main-bar/main-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { CardLabelComponent } from './components/game-card/card-label/card-label.component';
import { CardPriceComponent } from './components/game-card/card-price/card-price.component';
import { LoginComponent } from './pages//login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    MainBarComponent,
    HomeComponent,
    GameCardComponent,
    CardLabelComponent,
    CardPriceComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
