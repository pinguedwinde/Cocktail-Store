import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '@cocktail-store/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  @Input('cocktailDetails')
  public cocktail!: Cocktail;

  constructor() {}

  ngOnInit(): void {}
}
