import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSet'
})
export class TimeSetPipe implements PipeTransform {

  transform(date: any, args?: any): any {
    let i = 0;
    let myDate;
     setInterval(() => {
      myDate = date.getTime() + i;
      i ++;
      console.log(myDate);
      return this ;
    }, 1000);
    console.log(myDate);
  }
}
