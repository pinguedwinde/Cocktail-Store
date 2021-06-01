import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public ingredients$: BehaviorSubject<Ingredient[]> = new BehaviorSubject<
    Ingredient[]
  >([]);

  constructor() {}

  public addToCart(ingredients: Ingredient[]): void {
    const currentValue: Ingredient[] = this.ingredients$.value;
    if (currentValue) {
      const IngredientsMap: Record<string, number> = [
        ...currentValue,
        ...ingredients,
      ].reduce<Record<string, number>>((accumulator, value) => {
        if (accumulator[value.name]) {
          accumulator[value.name] += value.quantity;
        } else {
          accumulator[value.name] = value.quantity;
        }
        return accumulator;
      }, {});
      const result: Ingredient[] = Object.keys(IngredientsMap).map((key) => ({
        name: key,
        quantity: IngredientsMap[key],
      }));
      this.ingredients$.next(result);
    } else {
      this.ingredients$.next(ingredients);
    }
  }
}
