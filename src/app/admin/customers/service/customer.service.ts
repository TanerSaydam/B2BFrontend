import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PriceListModel } from '../../price-lists/model/price-list-model';
import { CustomerModel } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  getList(){
    let api = this.apiUrl + "Customers/GetList";
    return this.httpClient.get(api);
  }

  getById(id: number){
    let api = this.apiUrl + "Customers/GetById/" + id;
    return this.httpClient.get(api);
  }

  delete(customer: CustomerModel){
    let api = this.apiUrl + "Customers/Delete";
    return this.httpClient.post(api, customer);
  }

  add(customer: CustomerModel){
    let api = this.apiUrl + "Customers/Add";
    return this.httpClient.post(api, customer);
  }

  update(customer: CustomerModel){
    let api = this.apiUrl + "Customers/Update";
    return this.httpClient.post(api, customer);
  }

  changePasswordByAdminPanel(customer: CustomerModel){
    let api = this.apiUrl + "Customers/ChangePasswordByAdminPanel";
    return this.httpClient.post(api, customer);
  }
}
