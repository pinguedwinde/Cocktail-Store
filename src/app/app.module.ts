// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// routes
import { APP_ROUTES } from './app.routes';

import { CocktailModule } from './features/cocktail/cocktail.module';
import { CartModule } from './features/cart/cart.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
