import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productUri'
})
export class ProductUriPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    var re = /[^A-Z0-9]+/ig; //   / /g  //    /\s+/g  // /[^A-Z0-9]+/ig  //  /[^A-Z0-9]/ig
    var newstr = value.replace(re, "-"); 
    newstr += '/'+args; 
    return newstr;
  }

}
