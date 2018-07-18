import {Component} from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-after-view-parent',
  templateUrl: './after-view-parent.component.html',
  styleUrls: ['./after-view-parent.component.css'],
  providers: [LoggerService]
})
export class AfterViewParentComponent {
  show = true;

  constructor(public logger: LoggerService) {
  }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
