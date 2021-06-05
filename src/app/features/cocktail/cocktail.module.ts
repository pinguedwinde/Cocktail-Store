import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '@cocktail-store/shared/pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@cocktail-store/shared/modules/shared.module';

import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

import { COCKTAIL_ROUTES } from './cocktail.routes';

@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(COCKTAIL_ROUTES),
    ReactiveFormsModule,
  ],
})
export class CocktailModule {}
