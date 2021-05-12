import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import { TechnologiesComponent } from './technologies.component';
import { FilterPipe } from 'src/app/helpers/pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoritesModule } from 'src/app/components/favorites/favorites.module';
import { HttpClientModule } from '@angular/common/http';
import { AlertsModule } from 'src/app/components/alerts/alerts.module';

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
    HttpClientModule,
    AlertsModule
  ],
  exports: [
    TechnologiesComponent
  ]
})
export class TechnologiesModule { }
