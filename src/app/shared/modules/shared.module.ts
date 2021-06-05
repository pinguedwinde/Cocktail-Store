import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '@cocktail-store/shared/pipes/filter.pipe';
import { SelectedDirective } from '@cocktail-store/shared/directives/selected.directive';

@NgModule({
  declarations: [FilterPipe, SelectedDirective],
  imports: [CommonModule],
  exports: [CommonModule, FilterPipe, SelectedDirective],
})
export class SharedModule {}
