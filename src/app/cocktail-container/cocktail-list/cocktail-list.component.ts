import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '@cocktail-store/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails!: Cocktail[];
  @Output() private cocktailDetailer: EventEmitter<Cocktail> =
    new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(cocktail: Cocktail): void {
    this.cocktailDetailer.emit(cocktail);
  }
}
