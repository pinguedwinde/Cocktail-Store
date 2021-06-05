import { Routes } from '@angular/router';
import { CartContainerComponent } from './features/cart/cart-container/cart-container.component';
import { CocktailContainerComponent } from './features/cocktail/cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './features/cocktail/cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './features/cocktail/cocktail-container/cocktail-form/cocktail-form.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cocktails',
    pathMatch: 'full',
  },
  {
    path: 'cocktails',
    loadChildren: () =>
      import('./features/cocktail/cocktail.module').then(
        (module) => module.CocktailModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then((module) => module.CartModule),
  },
];
