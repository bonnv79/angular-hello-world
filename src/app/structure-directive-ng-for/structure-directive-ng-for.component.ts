import { Component } from '@angular/core';

@Component({
  selector: 'app-structure-directive-ng-for',
  templateUrl: './structure-directive-ng-for.component.html',
  styleUrls: ['./structure-directive-ng-for.component.scss']
})
export class StructureDirectiveNgForComponent {
  authors = [
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33",
    },
    {
      id: 2,
      firstName: "Priscella",
      lastName: "Signe",
      email: "psigne1@berkeley.edu",
      gender: "Female",
      ipAddress: "183.243.228.65",
    },
    // more data
  ];

  list = [
    {
      id: 1,
      title: 'item 1',
      show: true,
    },
    {
      id: 2,
      title: 'item 2',
      show: false,
    }
  ]

  jsonStringify(value: any) {
    return JSON.stringify(value);
  }
}
