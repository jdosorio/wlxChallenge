import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsconditionsComponent } from './termsconditions.component';

const routes: Routes = [
  {
    path: '', component: TermsconditionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsconditionsRoutingModule { }
