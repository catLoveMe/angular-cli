import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BunComponent } from  './bun/bun.component';

const routes: Routes = [
  {
    path:'bun',
    component:BunComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GyModuleRoutingModule { }
