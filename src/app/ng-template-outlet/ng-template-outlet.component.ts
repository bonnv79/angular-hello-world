import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent {
  counter = 10;
  loginText = 'login';
  signUpText = 'signUp';

  login() {

  }

  signUp() {

  }
}
