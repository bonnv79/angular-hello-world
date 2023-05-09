import { Component } from '@angular/core';
import { Author, authors } from "../authors";

@Component({
  selector: 'app-event-in-component',
  templateUrl: './event-in-component.component.html',
  styleUrls: ['./event-in-component.component.scss']
})
export class EventInComponentComponent {
  authors = authors;
  constructor() { }
  ngOnInit() { }
  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }
}
