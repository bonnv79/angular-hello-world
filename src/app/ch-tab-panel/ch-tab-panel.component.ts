import { Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabPanelContentDirective } from '../tab-panel-content.directive';
import { ChTabGroupComponent } from '../ch-tab-group/ch-tab-group.component';

@Component({
  selector: 'app-ch-tab-panel',
  templateUrl: './ch-tab-panel.component.html',
  styleUrls: ['./ch-tab-panel.component.scss']
})
export class ChTabPanelComponent {
  @Input()
  title!: string;
  @ViewChild(TemplateRef, { static: true })
  panelBody!: TemplateRef<unknown>;

  @ContentChild(TabPanelContentDirective, { static: true })
  explicitBody!: TemplateRef<unknown>;

  constructor(private tabGroup: ChTabGroupComponent) { }

  ngOnInit() {
    this.tabGroup.addTabPanel(this);
  }
  ngOnDestroy() {
    this.tabGroup.removeTabPanel(this);
  }
}
