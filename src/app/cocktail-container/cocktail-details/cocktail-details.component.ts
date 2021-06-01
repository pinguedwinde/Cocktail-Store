import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from '@cocktail-store/shared/interfaces/cocktail.interface';
import { CartService } from '@cocktail-store/shared/services/cart.service';
import { CocktailService } from '@cocktail-store/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail!: Cocktail;

  constructor(
    private cartService: CartService,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.cocktail = this.cocktailService.getCocktail(
        +(paramMap.get('index') || '')
      );
    });
  }

  public addToCart(): void {
    this.cartService.addToCart(this.cocktail.ingredients);
  }
}
