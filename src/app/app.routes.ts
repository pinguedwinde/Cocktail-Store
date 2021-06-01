import { Routes } from '@angular/router';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cocktails',
    pathMatch: 'full',
  },
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      {
        path: 'add',
        component: CocktailFormComponent,
      },
      {
        path: ':index/edit',
        component: CocktailFormComponent,
      },
      {
        path: ':index',
        component: CocktailDetailsComponent,
      },
      {
        path: '',
        redirectTo: '0',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'cart',
    component: CartContainerComponent,
  },
  {
    path: '**',
    redirectTo: 'cocktails',
  },
];
