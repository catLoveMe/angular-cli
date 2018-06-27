import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GyModuleRoutingModule } from './gy-module-routing.module';
import { BunComponent } from './bun/bun.component';

@NgModule({
  imports: [
    CommonModule,
    GyModuleRoutingModule
  ],
  declarations: [BunComponent]
})
export class GyModuleModule { }
