import {Component} from '@angular/core';

/**
 * 绑定语法
 * 数据绑定是一种机制，用来协调用户所见和应用数据。
 * 虽然你能往 HTML 推送值或者从 HTML 拉取值，
 * 但如果把这些琐事交给数据绑定框架处理， 应用会更容易编写、阅读和维护。
 * 只要简单地在绑定源和目标 HTML 元素之间声明绑定，框架就会完成这项工作。
 *
 * 绑定的类型可以根据数据流的方向分成三类： 从数据源到视图、从视图到数据源以及双向的从视图到数据源再到视图。
 *
 * 单向从数据源到视图
 * {{expression}}
 * [target]="expression"
 * bind-target="expression"
 * 插值表达式
 * 属性
 * Attribute
 * CSS 类
 * 样式
 *
 * 从视图到数据源的单向绑定
 * (target)="statement"
 * on-target="statement"
 * 事件
 *
 * 双向
 * [(target)]="expression"
 * bindon-target="expression"
 * 双向
 *
 * 绑定目标
 * 数据绑定的目标是 DOM 中的某些东西。
 * 这个目标可能是（元素 | 组件 | 指令的）property、（元素 | 组件 | 指令的）事件，或(极少数情况下) attribute 名。
 * 下面是的汇总表：
 *
 * 属性
 * 元素的 property
 * 组件的 property
 * 指令的 property
 * <img [src]="heroImageUrl">
 * <app-hero-detail [hero]="currentHero"></app-hero-detail>
 * <div [ngClass]="{'special': isSpecial}"></div>
 *
 * 事件
 * 元素的事件
 * 组件的事件
 * 指令的事件
 * <button (click)="onSave()">Save</button>
 * <app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>
 * <div (myClick)="clicked=$event" clickable>click me</div>
 *
 * 双向
 * 事件与 property
 * <input [(ngModel)]="name">
 *
 * Attribute
 * attribute（例外情况）
 * <button [attr.aria-label]="help">help</button>
 *
 * CSS 类
 * class property
 * <div [class.special]="isSpecial">Special</div>
 *
 * 样式
 * style property
 * <button [style.color]="isSpecial ? 'red' : 'green'">
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isSpecial: Boolean = false;

  changeStyle() {
    this.isSpecial = !this.isSpecial;
  }
}
