import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { HelperService } from 'src/app/services/helper.service';
import { ProductModel } from './model/product-model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];
  product: ProductModel = new ProductModel();

  filterText: string = "";

  constructor(
    private productService: ProductService,
    private errorService: ErrorService,
    private toastr: ToastrService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  exportExcel(){
    let element = document.getElementById("excel-table");
    let title = "Ürünler";
    this.helperService.exportExcel(element,title);
  }

  getList(){
    this.productService.getList().subscribe((res: any)=>{
      this.products = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  delete(product: ProductModel){
    this.productService.delete(product).subscribe((res: any)=>{
      this.toastr.info(res.message)
      this.getList();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  add(addForm: NgForm){
    let product: ProductModel = new ProductModel();
    product.name = addForm.value.productName;
    product.id = 0;

    this.productService.add(product).subscribe((res: any)=>{
      this.toastr.success(res.message);
      this.getList();
      addForm.reset();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }


  getProduct(product: ProductModel){
    this.productService.getById(product.id).subscribe((res: any)=>{
      this.product = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  update(){
    this.productService.update(this.product).subscribe((res: any)=>{
      this.toastr.success(res.message);
      this.getList();
      document.getElementById("updateModelCloseBtn").click();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }


}
