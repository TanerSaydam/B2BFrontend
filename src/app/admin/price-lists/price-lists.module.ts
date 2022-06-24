import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListsComponent } from './price-lists.component';
import { RouterModule, Routes } from '@angular/router';
import { PriceListPipe } from './pipe/price-list.pipe';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PriceListDetailModule } from './price-list-detail/price-list-detail.module';

const routes: Routes=[
  {
    path: '',
    component: PriceListsComponent
  }
]

@NgModule({
  declarations: [
    PriceListsComponent,
    PriceListPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SweetAlert2Module,
    PriceListDetailModule
  ],
  exports: [
    PriceListsComponent,
    PriceListDetailModule
  ]
})
export class PriceListsModule { }
