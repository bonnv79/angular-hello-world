export interface PipeTransform {
  transform(value: any, ...args: any[]): any;
}

// export interface User {
//   name: string,
//   age: number
// }

export class User {
  constructor(public name = '', public age = 0) {

  }
}