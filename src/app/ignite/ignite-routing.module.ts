import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IgniteHomeComponent } from './ignite-home/ignite-home.component';

const routes: Routes = [
  {
    path: '',
    component: IgniteHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IgniteRoutingModule { }
