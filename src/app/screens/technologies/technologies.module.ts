import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import { TechnologiesComponent } from './technologies.component';
import { FilterPipe } from 'src/app/helpers/pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoritesModule } from 'src/app/components/favorites/favorites.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TechnologiesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FavoritesModule,
    HttpClientModule
  ],
  exports: [
    TechnologiesComponent
  ]
})
export class TechnologiesModule { }
