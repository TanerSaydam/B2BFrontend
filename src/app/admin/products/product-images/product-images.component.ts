import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { ProductImageModel } from './model/product-image-model';
import { ProductImagesService } from './service/product-images.service';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {

  fileImages: any[] = [];
  productImages: ProductImageModel[] = [];

  productId: number = 0;

  constructor(
    private productImageService: ProductImagesService,
    private activatedRoute: ActivatedRoute,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any)=>{
      this.productId = res.id
      this.getList();
    });
  }


  getList(){
    this.productImageService.getList(this.productId).subscribe((res: any)=>{
      this.productImages = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  uploadImages(){
    let formData = new FormData();
    formData.append("productId",this.productId.toString());
    for (let i = 0; i < this.fileImages.length; i++) {
      formData.append("images",this.fileImages[i],this.fileImages[i].fileName)
    }

    this.productImageService.add(formData).subscribe((res: any)=>{
      this.getList();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  deleteImage(productImage: ProductImageModel){
    this.productImageService.delete(productImage).subscribe((res)=>{
      this.getList();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  getImages(event: any){
    this.fileImages = event.target.files;
  }

  setMainImage(id: number){
    this.productImageService.setMainImage(id).subscribe((res: any)=>{
      this.getList();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

}
