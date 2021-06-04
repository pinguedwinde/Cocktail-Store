import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cocktail } from '@cocktail-store/shared/interfaces/cocktail.interface';
import { Ingredient } from '@cocktail-store/shared/interfaces/ingredient.interface';
import { CocktailService } from '@cocktail-store/shared/services/cocktail.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent implements OnInit {
  public cocktailForm!: FormGroup;
  public cocktail!: Cocktail;

  constructor(
    private formBuilder: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this.cocktailService
          .getCocktail(+index)
          .pipe(first())
          .subscribe((cocktail: Cocktail) => (this.cocktail = cocktail));
      }
      this.initCocktailForm(this.cocktail);
    });
  }
  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  private emptyCockatil: Cocktail = {
    _id: '',
    name: '',
    img: '',
    description: '',
    ingredients: [],
  };
  private initCocktailForm(cocktail: Cocktail = this.emptyCockatil) {
    this.cocktailForm = this.formBuilder.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.formBuilder.array(
        cocktail.ingredients.map((ingredient: Ingredient) => {
          return this.formBuilder.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required],
          });
        }),
        Validators.required
      ),
    });
  }

  public addIngredientForm(): void {
    this.ingredients.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }

  public submit(): void {
    if (this.cocktail) {
      this.cocktailService
        .editCocktail(this.cocktail._id, this.cocktailForm.value)
        .subscribe();
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value).subscribe();
    }
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
