import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildViewComponent} from '../child-view/child-view.component';
import {LoggerService} from '../logger.service';

/**
 * 显示 Angular 中的视图所指的是什么。
 * 演示了 ngAfterViewInit 和 ngAfterViewChecked 钩子。
 */
@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
  private prevHero = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  comment = '';

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      // 为什么在更新 comment 属性之前，doSomething() 方法要等上一拍(tick)？
      // Angular 的“单向数据流”规则禁止在一个视图已经被组合好之后再更新视图。
      // 而这两个钩子都是在组件的视图已经被组合好之后触发的。
      // 如果立即更新组件中被绑定的 comment 属性，Angular 就会抛出一个错误(试试!)。
      // LoggerService.tick_then() 方法延迟更新日志一个回合（浏览器 JavaScript 周期回合），这样就够了。
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    let child = this.viewChild;
    let message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }

  // ...
}
