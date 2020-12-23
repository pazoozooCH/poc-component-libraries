import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgniteHomeComponent } from './ignite-home/ignite-home.component';
import { IgniteRoutingModule } from './ignite-routing.module';

@NgModule({
  declarations: [IgniteHomeComponent],
  imports: [CommonModule, IgniteRoutingModule],
})
export class IgniteModule {}
