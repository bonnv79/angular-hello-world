import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent {
  @Input() author: Author | undefined;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() { }
  ngOnInit() { }
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
