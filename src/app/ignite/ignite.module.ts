import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgniteHomeComponent } from './ignite-home/ignite-home.component';
import { IgniteRoutingModule } from './ignite-routing.module';
import { IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule } from 'igniteui-angular';

@NgModule({
  declarations: [IgniteHomeComponent],
  imports: [
    CommonModule,
    IgniteRoutingModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,IgxToggleModule
  ],
})
export class IgniteModule {}
