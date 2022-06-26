import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { HelperService } from 'src/app/services/helper.service';
import { PriceListModel } from '../price-lists/model/price-list-model';
import { PriceListService } from '../price-lists/service/price-list.service';
import { CustomerRelationshipModel } from './model/customer-relationship-model';
import { CustomerModel } from './model/customer.model';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: CustomerModel[] = [];
  priceLists: PriceListModel[] = [];
  customer: CustomerModel = new CustomerModel();

  filterText: string = "";
  newPassword: string = "";
  constructor(
    private customerService: CustomerService,
    private errorService: ErrorService,
    private toastr: ToastrService,
    private helperService: HelperService,
    private priceListService: PriceListService
  ) { }

  ngOnInit(): void {
    this.getList();
    this.getPriceList();
  }

  exportExcel(){
    let element = document.getElementById("excel-table");
    let title = "Müşteri Listesi";
    this.helperService.exportExcel(element,title);
  }

  getList(){
    this.customerService.getList().subscribe((res: any)=>{
      this.customers = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  getPriceList(){
    this.priceListService.getList().subscribe((res: any)=>{
      this.priceLists = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  delete(customer: CustomerModel){
    this.customerService.delete(customer).subscribe((res: any)=>{
      this.toastr.info(res.message)
      this.getList();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  add(addForm: NgForm){
    let customer: CustomerModel = new CustomerModel();
    customer.name = addForm.value.name;
    customer.email = addForm.value.email;
    customer.password = addForm.value.password;

    this.customerService.add(customer).subscribe((res: any)=>{
      this.toastr.success(res.message);
      this.getList();
      addForm.reset();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }


  getCustomer(customer: CustomerModel){
    this.customerService.getDtoById(customer.id).subscribe((res: any)=>{
      this.customer = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  update(){
    this.customerService.update(this.customer).subscribe((res: any)=>{
      this.toastr.success(res.message);
      this.getList();
      document.getElementById("updateModelCloseBtn").click();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  updateReleationship(){
    let model: CustomerRelationshipModel = new CustomerRelationshipModel();
    model.customerId = this.customer.id;
    model.priceListId = this.customer.priceListId;
    model.discount = this.customer.discount;

    this.customerService.updateRelationship(model).subscribe((res: any)=>{
      this.toastr.info(res.message);
      this.getList();
      document.getElementById("updateRelationshipModelCloseBtn").click();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  changePassowrd(){
    let customer = new CustomerModel();
    customer.id = this.customer.id;
    customer.password = this.newPassword;

    this.customerService.changePasswordByAdminPanel(customer).subscribe((res: any)=>{
      this.toastr.info(res.message);
      this.getList();
      document.getElementById("updatePasswordModelCloseBtn").click();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

}
