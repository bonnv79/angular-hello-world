import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChTabPanelComponent } from '../ch-tab-panel/ch-tab-panel.component';

@Component({
  selector: 'app-ch-tab-group',
  templateUrl: './ch-tab-group.component.html',
  styleUrls: ['./ch-tab-group.component.scss']
})
export class ChTabGroupComponent implements OnInit {
  tabPanelList: ChTabPanelComponent[] = [];

  @Input() tabActiveIndex = 0;
  @Output() tabActiveChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() { }

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    this.tabActiveChange.emit(idx);
  }

  addTabPanel(tab: ChTabPanelComponent) {
    this.tabPanelList.push(tab);
  }
  removeTabPanel(tab: ChTabPanelComponent) {
    let index = -1;
    const tabPanelList: ChTabPanelComponent[] = [];
    this.tabPanelList.forEach((item, idx) => {
      if (tab === item) {
        index = idx;
        return;
      }
      tabPanelList.push(item);
    });
    this.tabPanelList = tabPanelList;
    if (index !== -1) {
      this.selectItem(0);
    }
  }
}
