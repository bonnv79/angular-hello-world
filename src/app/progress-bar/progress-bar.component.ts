import { Component, OnInit, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string = '';
  @Input() progressColor: string = '';
  @Input() progress = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if ("progress" in changes) {
      const { currentValue } = changes["progress"] || {};
      if (typeof currentValue !== "number") {
        const progress = Number(currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }

  private $progress1 = 0;
  @Input()
  get progress1(): number {
    return this.$progress1;
  }
  set progress1(value: number) {
    if (typeof value !== "number") {
      const progress = Number(value);
      if (Number.isNaN(progress)) {
        this.$progress1 = 0;
      } else {
        this.$progress1 = progress;
      }
    } else {
      this.$progress1 = value;
    }
  }

  ngOnInit() { }
}
