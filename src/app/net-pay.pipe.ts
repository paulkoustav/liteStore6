import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'netPay'
})
export class NetPayPipe implements PipeTransform {

  transform(items: any[], attr?: string): any {

    if (items) {
      let sum = items.reduce((a, b) => a + Number(b[attr]), 0);
      return sum;
    }

  }

}
