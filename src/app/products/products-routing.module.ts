import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {
    path: 'product-list', component: ProductListComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'product-alert', component: ProductAlertsComponent
  },
  {
    path: '**', redirectTo: 'product-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
