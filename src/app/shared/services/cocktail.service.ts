import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { Cocktail } from '../interfaces/cocktail.interface';
import { COCKTAILS } from '../models/cocktails.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private URL = 'https://restapi.fr/api/cocktails';
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject(
    new Array<Cocktail>()
  );

  constructor(private http: HttpClient) {
    // COCKTAILS.forEach((cocktail) => {
    //   this.http.post(this.URL, cocktail).subscribe();
    // });
  }

  public fetchCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.URL).pipe(
      tap((cocktails: Cocktail[]) => {
        this.cocktails$.next(cocktails);
      })
    );
  }

  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      filter((cocktails: Cocktail[]) => cocktails.length !== 0),
      map((cokctails: Cocktail[]) => {
        return cokctails[index];
      })
    );
  }

  public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http.post<Cocktail>(this.URL, cocktail).pipe(
      tap((savedCocktail: Cocktail) => {
        this.cocktails$.next([...this.cocktails$.value, savedCocktail]);
      })
    );
  }

  public editCocktail(
    cocktailId: string,
    editedCocktail: Cocktail
  ): Observable<Cocktail> {
    return this.http
      .patch<Cocktail>(`${this.URL}/${cocktailId}`, editedCocktail)
      .pipe(
        tap((updatedCocktail: Cocktail) => {
          let currentValue = this.cocktails$.value;
          this.cocktails$.next(
            currentValue.map((cocktail: Cocktail) => {
              if (updatedCocktail.name === cocktail.name) {
                return updatedCocktail;
              } else {
                return cocktail;
              }
            })
          );
        })
      );
  }
}
