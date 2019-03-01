import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByAgeLine',
  pure: true
})
export class SortByAgeLinePipe implements PipeTransform {
  transform(users: any, property?: string, line?: string): any {
    const myProperty = property;
    if ((!property) || (!line)) {
      console.log('no data');
      return users;
    }
    if (line === 'up') {
    return users.sort((prev, next) => {
      if (prev.myProperty < next.myProperty) {
        return -1;
      } else if (prev.myProperty > next.myProperty) {
        return 1;
      } else {
        return 0;
      }
      });
    } else if (line === 'down') {
      console.log('down');
    return users.sort((prev, next) => {
      if (prev.property < next.property) {
        return 1;
      } else if (prev.property > next.property) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}}
