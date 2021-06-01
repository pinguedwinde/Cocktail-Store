import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from '@cocktail-store/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails!: Cocktail[];
  constructor() {}

  ngOnInit(): void {}
}
