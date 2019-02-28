import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByAgeLine',
  pure: true
})
export class SortByAgeLinePipe implements PipeTransform {
  transform(users: any, line?: string): any {
    if (!line) {
      return users;
    }
    if (line === 'up') {
    return users.sort((prev, next) => {
      if (prev.age < next.age) {
        return -1;
      } else if (prev.age > next.age) {
        return 1;
      } else {
        return 0;
      }
      });
    } else if (line === 'down') {
    return users.sort((prev, next) => {
      if (prev.age < next.age) {
        return 1;
      } else if (prev.age > next.age) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}}
