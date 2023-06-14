import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-label',
  templateUrl: './control-label.component.html',
  styleUrls: ['./control-label.component.scss']
})
export class ControlLabelComponent {
  @Input() label?: string = '';
}
