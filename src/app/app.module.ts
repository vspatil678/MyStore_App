import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [

    BrowserModule, BrowserAnimationsModule, AppRoutingModule, MenubarModule, ButtonModule, CommonModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
