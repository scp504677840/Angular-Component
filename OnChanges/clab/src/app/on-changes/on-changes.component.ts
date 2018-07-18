import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Hero} from '../hero';

/**
 * 这里将会看到：每当组件的输入属性发生变化时，Angular 会如何以 changes 对象作为参数去调用 ngOnChanges() 钩子。
 * 展示了该如何理解和使用 changes 对象。
 *
 * OnChanges() 钩子
 * 一旦检测到该组件(或指令)的输入属性发生了变化，Angular 就会调用它的 ngOnChanges() 方法。
 *
 * ngOnChanges() 方法获取了一个对象，
 * 它把每个发生变化的属性名都映射到了一个SimpleChange对象，
 * 该对象中有属性的当前值和前一个值。
 * 这个钩子会在这些发生了变化的属性上进行迭代，并记录它们。
 *
 * 这个例子中的 OnChangesComponent 组件有两个输入属性：hero 和 power。
 * 宿主 OnChangesParentComponent 绑定了它们，就像这样：
 * <app-on-changes [hero]="hero" [power]="power"></app-on-changes>
 *
 * 当 power 属性的字符串值变化时，相应的日志就出现了。
 * 但是 ngOnChanges 并没有捕捉到 hero.name 的变化。 这是第一个意外。
 *
 * Angular 只会在输入属性的值变化时调用这个钩子。
 * 而 hero 属性的值是一个到英雄对象的引用。
 * Angular 不会关注这个英雄对象的 name 属性的变化。
 * 这个英雄对象的引用没有发生变化，于是从 Angular 的视角看来，也就没有什么需要报告的变化了。
 */
@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges {
  @Input() hero: Hero;
  @Input() power: string;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  reset() {
    this.changeLog = [];
  }
}
