import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
