import { Component, OnInit } from '@angular/core';
import { Cocktail } from '@cocktail-store/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  cocktail: Cocktail = {
    name: 'Mai Tai',
    img: 'https://www.hangoverweekends.co.uk/media/15506/mm-cocktail-guide-maitai-590x375.jpg?width=434px&height=276px',
    description:
      'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.',
  };

  constructor() {}

  ngOnInit(): void {}
}
