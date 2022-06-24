import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceListDetailPipe'
})
export class PriceListDetailPipe implements PipeTransform {

  transform(value: any[], filterText: string): any[] {
    if (filterText == "" || filterText == null) {
      return value;
    }

    return value.filter(p=> {
      const productName = p.productName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
      return (productName)
    });
  }

}
