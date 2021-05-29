import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '@cocktail-store/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails!: Cocktail[];
  @Input() public selectedCocktail!: Cocktail;
  @Output() private cocktailDetailer: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.cocktailDetailer.emit(index);
  }
}
