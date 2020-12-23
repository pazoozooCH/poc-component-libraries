import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { IgniteHomeComponent } from './ignite/ignite-home/ignite-home.component';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
  },
  {
    path: 'ignite',
    loadChildren: () =>
      import('./ignite/ignite.module').then((m) => m.IgniteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
