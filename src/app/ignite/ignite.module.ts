import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgniteHomeComponent } from './ignite-home/ignite-home.component';
import { IgniteRoutingModule } from './ignite-routing.module';
import { IgxAvatarModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';

@NgModule({
  declarations: [IgniteHomeComponent],
  imports: [
    CommonModule,
    IgniteRoutingModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
  ],
})
export class IgniteModule {}
