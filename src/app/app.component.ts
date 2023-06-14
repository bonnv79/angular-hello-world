import { Component } from '@angular/core';

const version = '2.0';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Angular Hello World (v${version})`;
}
