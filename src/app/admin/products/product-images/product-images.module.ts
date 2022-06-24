import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImagesComponent } from './product-images.component';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes = [
  {
    path: '',
    component: ProductImagesComponent
  }
]

@NgModule({
  declarations: [
    ProductImagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SweetAlert2Module
  ],
  exports: [
    ProductImagesComponent
  ]
})
export class ProductImagesModule { }
