import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { OrderModel } from '../model/order-model';
import { OrderService } from '../service/order.service';
import { OrderDetailModel } from './model/order-detail-model';
import { OrderDetailService } from './service/order-detail.service';

@Component({
  selector: 'app-order-detial',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderDetails: OrderDetailModel[] = [];
  order: OrderModel = new OrderModel();

  orderId: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderDetailService: OrderDetailService,
    private errorService: ErrorService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any)=>{
      this.orderId = res.id;
      this.getList();
      this.getOrder();
    });
  }

  getOrder(){
    this.orderService.getById(this.orderId).subscribe((res: any)=>{
      this.order = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  getList(){
    this.orderDetailService.getList(this.orderId).subscribe((res: any)=>{
      this.orderDetails = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

}
