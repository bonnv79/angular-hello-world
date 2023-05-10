import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent {
  @Input()
  headerTemplate!: TemplateRef<any>; // Custom template provided by parent
}
