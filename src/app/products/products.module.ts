import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAlertsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ButtonModule,
    BrowserModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
