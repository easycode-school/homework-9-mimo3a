import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByAge',
  pure: false
})
export class SortByAgePipe implements PipeTransform {

  transform(users: any, minAge: number = 42): any {
    return users.filter((user) => user.age >= minAge);
  }
}
