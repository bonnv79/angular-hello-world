import { Component, forwardRef } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-bs-tab-group',
  templateUrl: './bs-tab-group.component.html',
  styleUrls: ['./bs-tab-group.component.scss'],
  providers: [
    {
      provide: TabGroupComponent,
      // useExisting: BsTabGroupComponent,
      useExisting: forwardRef(() => BsTabGroupComponent),
    },
  ],
})
export class BsTabGroupComponent extends TabGroupComponent {

}
