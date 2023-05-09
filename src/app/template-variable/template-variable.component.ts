import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.scss']
})
export class TemplateVariableComponent {
  @ViewChild("toggleComp1")
  toggleComp1: ToggleComponent = new ToggleComponent;

  model = {
    name: 'Vietjeck'
  };

  @ViewChild("nameForm", {
    read: ElementRef,
    static: true,
  })
  form: ElementRef<HTMLFormElement> | undefined;

  @ViewChildren(ToggleComponent) toggleList: QueryList<ToggleComponent> | undefined;

  ngOnInit() {
    console.log(this.form);
  }

  toggleInside() {
    this.toggleComp1.toggle();
  };

  ngAfterViewInit() {
    console.log(this.toggleList);
  }
}
