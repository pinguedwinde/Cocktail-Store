import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '@cocktail-store/shared/interfaces/ingredient.interface';
import { CartService } from '@cocktail-store/shared/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
})
export class CartContainerComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cartService.ingredients$.subscribe(
        (ingredients: Ingredient[]) => (this.ingredients = ingredients)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
