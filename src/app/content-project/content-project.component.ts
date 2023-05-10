import { Component } from '@angular/core';

@Component({
  selector: 'app-content-project',
  templateUrl: './content-project.component.html',
  styleUrls: ['./content-project.component.scss']
})
export class ContentProjectComponent {
  questions = {
    question1: false,
    question2: false,
  }
}
