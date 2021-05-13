import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsconditionsComponent } from './termsconditions.component';
import { TermsconditionsRoutingModule } from './technologies-routing.module';


@NgModule({
  declarations: [
    TermsconditionsComponent
  ],
  imports: [
    CommonModule,
    TermsconditionsRoutingModule
  ],
  exports: [
    TermsconditionsComponent
  ]
})
export class TermsconditionsModule { }
