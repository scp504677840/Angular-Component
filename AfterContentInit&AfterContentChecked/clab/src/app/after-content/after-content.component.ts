import {AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {ChildComponent} from '../child/child.component';
import {LoggerService} from '../logger.service';

/**
 * 展示如何把外部内容投影进组件中，
 * 以及如何区分“投影进来的内容”和“组件的子视图”。
 * 演示了 ngAfterContentInit 和 ngAfterContentChecked 钩子。
 *
 * AfterContent 例子展示了 AfterContentInit() 和 AfterContentChecked() 钩子，
 * Angular 会在外来内容被投影到组件中之后调用它们。
 *
 * 内容投影
 * 内容投影是从组件外部导入 HTML 内容，并把它插入在组件模板中指定位置上的一种途径。
 * AngularJS 的开发者大概知道一项叫做 transclusion 的技术，对，这就是它的马甲。
 *
 * 对比前一个例子考虑这个变化。
 * 这次不再通过模板来把子视图包含进来，而是改为从 AfterContentComponent 的父组件中导入它。
 * 下面是父组件的模板：
 * <after-content>
 *     <app-child></app-child>
 * </after-content>
 * 注意，<app-child> 标签被包含在 <after-content> 标签中。
 * 永远不要在组件标签的内部放任何内容 —— 除非你想把这些内容投影进这个组件中。
 * 现在来看下 <after-content> 组件的模板：
 * <div>-- projected content begins --</div>
 *     <ng-content></ng-content>
 * <div>-- projected content ends --</div>
 * <p *ngIf="comment" class="comment">
 *     {{comment}}
 * </p>
 * <ng-content> 标签是外来内容的占位符。
 * 它告诉 Angular 在哪里插入这些外来内容。
 * 在这里，被投影进去的内容就是来自父组件的 <app-child> 标签。
 *
 * 下列迹象表明存在着内容投影：
 * - 在组件的元素标签中有 HTML
 * - 组件的模板中出现了 <ng-content> 标签
 *
 * AfterContent 钩子
 * AfterContent 钩子和 AfterView 相似。关键的不同点是子组件的类型不同。
 * AfterView 钩子所关心的是 ViewChildren，这些子组件的元素标签会出现在该组件的模板里面。
 * AfterContent 钩子所关心的是 ContentChildren，这些子组件被 Angular 投影进该组件中。
 *
 * 使用 AfterContent 时，无需担心单向数据流规则
 * 该组件的 doSomething() 方法立即更新了组件被绑定的 comment 属性。 它不用等下一回合。
 * 回忆一下，Angular 在每次调用 AfterView 钩子之前也会同时调用 AfterContent。
 * Angular 在完成当前组件的视图合成之前，就已经完成了被投影内容的合成。
 * 所以你仍然有机会去修改那个视图。
 */
@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }

}
