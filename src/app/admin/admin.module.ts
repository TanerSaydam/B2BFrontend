import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LayoutsModule } from './layouts/layouts.module';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LayoutsModule,
    LoginModule,
    ProductsModule,
  ],
  exports: [
    HomeModule,
    LayoutsModule,
    LoginModule,
    ProductsModule,
  ]
})
export class AdminModule { }
