import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import {LoggerService} from '../logger.service';

let nextId = 1;

export class PeekABoo implements OnInit {
  constructor(private logger: LoggerService) {
  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.css']
})
export class PeekABooComponent extends PeekABoo implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() name: string;

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);
    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 每一次调用该方法时，都将创建一个记录改变信息的列表
    const changesMsgs: string[] = [];
    // 遍历键值对集合
    for (const propName in changes) {
      // 找到key为name的键值对
      if (propName === 'name') {
        // 得到key为name的当前值
        const name = changes['name'].currentValue;
        // 记录key为name的变化信息
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        // 当没有找到key为name的键值对时，执行此处
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  ngDoCheck(): void {
    this.logIt(`DoCheck`);
  }

  ngAfterContentInit(): void {
    this.logIt(`AfterContentInit`);
  }

  ngAfterContentChecked(): void {
    this.logIt(`AfterContentChecked`);
  }

  ngAfterViewInit(): void {
    this.logIt(`AfterViewInit`);
  }

  ngAfterViewChecked(): void {
    this.logIt(`AfterViewChecked`);
  }

  ngOnDestroy(): void {
    this.logIt(`OnDestroy`);
  }

}
