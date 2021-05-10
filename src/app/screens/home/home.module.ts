import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { TwitterSectionComponent } from './twitter-section/twitter-section.component';
import { BenefitsSectionComponent } from './benefits-section/benefits-section.component';
import { ThanksSectionComponent } from './thanks-section/thanks-section.component';


@NgModule({
  declarations: [HomeComponent, HomeSectionComponent, TwitterSectionComponent, BenefitsSectionComponent, ThanksSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
