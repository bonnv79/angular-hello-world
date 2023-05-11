import { Component } from '@angular/core';
import { Observable, finalize, map, startWith, takeWhile, timer } from 'rxjs';
import { User } from '../interfaces';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent {
  now = "2020-06-24T09:00:00.000Z";
  money = '1000000000';
  number = '10.10';
  objectJson = {
    name: 'hello',
    title: 'world'
  };

  resourceId = '';

  userIdChangeAfterFiveSeconds = "14324";
  time$: Observable<number> = timer(0, 1000).pipe(
    map((val) => 10 - (val + 1)),
    startWith(10),
    finalize(() => {
      this.userIdChangeAfterFiveSeconds = "";
    }),
    takeWhile((val) => val >= 0)
  );

  newUser = new User('Name', 20);

  users: User[] = [
    {
      name: "Tiep Phan",
      age: 30
    },
    {
      name: "Trung Vo",
      age: 28
    },
    {
      name: "Chau Tran",
      age: 29
    },
    {
      name: "Tuan Anh",
      age: 16
    }
  ];

  addUser() {
    // this.users.push(this.newUser);
    this.users = [...this.users, this.newUser];
    this.newUser = new User('Name', 20);
  }
}
