import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OrderModel } from '../model/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  getList(){
    let api = this.apiUrl + "Orders/GetListDto";
    return this.httpClient.get(api);
  }

  getById(id: number){
    let api = this.apiUrl + "Orders/GetById/" + id;
    return this.httpClient.get(api);
  }

  delete(order: OrderModel){
    let api = this.apiUrl + "Orders/Delete";
    return this.httpClient.post(api, order);
  }

  add(order: OrderModel){
    let api = this.apiUrl + "Orders/Add";
    return this.httpClient.post(api, order);
  }

  update(order: OrderModel){
    let api = this.apiUrl + "Orders/Update";
    return this.httpClient.post(api, order);
  }
}
