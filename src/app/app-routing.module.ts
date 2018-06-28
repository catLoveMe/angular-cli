import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent} from './about/about.component'
import { ProductComponent } from './product/product.component'
import { ProDetailComponent } from  './pro-detail/pro-detail.component'
import { Tab1Component } from  './tab1/tab1.component'
import { Tab2Component } from  './tab2/tab2.component'
const routes: Routes = [
  {
    path:'',
    redirectTo:'/about',
    pathMatch:'full'
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'product',
    component: ProductComponent,
    children: [
      {
        path:'',
        redirectTo:'tab1',
        pathMatch:'full'
      },
      {
        path:'tab1',
        component: Tab1Component
      },
      {
        path:'tab2',
        component: Tab2Component
      }
    ]
  },
  {
    path:'detail/:id',
    component: ProDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
