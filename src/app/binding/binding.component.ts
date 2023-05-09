import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  isTabActive = true;
  width = '100%';

  // ['foo', 'bar'] || {foo: true, bar: false}
  classExpr = 'my-class-1 my-class-2 my-class-3';

  // ['width', '100px'] || {[key: string]: string | undefined | null} ex: {width: '100px', height: '100px'}
  styleExpr = 'width: 100%; height: 100%';
}
