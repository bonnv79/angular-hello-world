import { Component, Input } from '@angular/core';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() version?: string = '';
  menuItems = routes;

  // menuItems = [
  //   {
  //     id: 'home',
  //     path: "/",
  //     title: "Home",
  //     icon: 'home',
  //   },
  //   {
  //     id: 'hello',
  //     path: "hello",
  //     title: "Hello",
  //     icon: '',
  //   },
  // ]
  getTitle(title: any) {
    return `${title}`;
  }
}
