import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Cocktail[] | null, search: string): Cocktail[] | null {
    return value
      ? value.filter((cockatil: Cocktail) =>
          cockatil.name.toLowerCase().includes(search.toLowerCase())
        )
      : value;
  }
}
