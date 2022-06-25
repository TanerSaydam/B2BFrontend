import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  getList(orderId: number){
    let api = this.apiUrl + "OrderDetails/GetListDto/" + orderId;
    return this.httpClient.get(api);
  }
}
