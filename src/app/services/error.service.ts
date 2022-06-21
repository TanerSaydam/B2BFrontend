import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private toastr: ToastrService
  ) { }

  errorHandler(err: any){
    if (err.status == 400) {
      this.toastr.error(err.error);
    }else if(err.status == 0){
      this.toastr.error("Bağlantı hatası. Lütfen daha sonra tekrar deneyin");
    }else if(err.status == 405){
      this.toastr.error("Bilinmeyen hata!");
    }else{
      this.toastr.error(err.error.Message);
    }
  }
}
