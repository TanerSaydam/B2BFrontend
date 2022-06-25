import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderPipe } from './pipe/order.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  }
]

@NgModule({
  declarations: [
    OrdersComponent,
    OrderPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    OrdersComponent
  ]
})
export class OrdersModule { }
