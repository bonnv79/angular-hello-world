import { Component, Pipe } from '@angular/core';
import { PipeTransform, User } from '../interfaces';

@Pipe({
  name: "isAdult",
  // pure: false // don't should use pure config
})

export class IsAdultComponent implements PipeTransform {
  transform(arr: User[]): User[] {
    return arr.filter((x) => x.age > 18);
  }
}
