import { Component } from '@angular/core';
import { Router } from '@angular/router';

const version = '2.1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version: string = version;
  title = `Angular Hello World (v${version})`;
  constructor(private router: Router) {
  }

  getTitle() {
    let title = this.router.routerState.snapshot.url;
    return title?.split('/')?.[1];
  }
}
