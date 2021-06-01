// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { SelectedDirective } from './shared/directives/selected.directive';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { IngredientListComponent } from './cart-container/ingredient-list/ingredient-list.component';

// routes
import { APP_ROUTES } from './app.routes';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    CartContainerComponent,
    IngredientListComponent,
    CocktailFormComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
