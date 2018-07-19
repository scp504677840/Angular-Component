import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  /*host: {
    '[@state]': 'state',
    '(@state.done)': 'onAnimationDone($event)',
  },*/
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
})
export class PopupComponent {

  @HostBinding('@state') state: 'opened' | 'closed' = 'closed';

  @HostListener('@state.done') onAnimationDone($event) {
    if ($event.toState === 'closed') {
      this.closed.next();
    }
  }

  _message: string;

  @Output()
  closed = new EventEmitter();

  /**
   * 弹窗状态
   */

  // private state: 'opened' | 'closed' = 'closed';

  /**
   * 监听父组件属性变化
   *
   * @param message 消息
   */
  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';

    setTimeout(() => this.state = 'closed', 2000);
  }

  get message(): string {
    return this._message;
  }

}
