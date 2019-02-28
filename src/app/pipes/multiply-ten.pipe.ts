import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyTen'
})
export class MultiplyTenPipe implements PipeTransform {

  transform(value: any, num: number = 10): number {
    console.log(value, num);
    return value * num;
  }

}
