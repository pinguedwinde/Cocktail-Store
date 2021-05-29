import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from '@cocktail-store/shared/interfaces/cocktail.interface';
import { CocktailService } from '@cocktail-store/shared/services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  public selectedCocktail!: Cocktail;
  public cocktails: Cocktail[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe(
        (cocktails: Cocktail[]) => (this.cocktails = cocktails)
      )
    );
    this.subscription.add(
      this.cocktailService.selectedCokctail$.subscribe(
        (selectedCocktail: Cocktail) =>
          (this.selectedCocktail = selectedCocktail)
      )
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public selectCocktail(index: number) {
    this.cocktailService.selectCocktail(index);
  }
}
