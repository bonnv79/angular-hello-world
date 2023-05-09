import { Component } from '@angular/core';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
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
}
