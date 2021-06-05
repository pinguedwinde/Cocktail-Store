import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { IngredientListComponent } from './cart-container/ingredient-list/ingredient-list.component';
import { RouterModule } from '@angular/router';
import { CART_ROUTES } from './cart.routes';

@NgModule({
  declarations: [CartContainerComponent, IngredientListComponent],
  imports: [CommonModule, RouterModule.forChild(CART_ROUTES)],
})
export class CartModule {}
