import {Component, OnInit} from '@angular/core';

/**
 * 结构型指令
 *
 * 什么是结构型指令？
 * 结构型指令的职责是 HTML 布局。 它们塑造或重塑 DOM 的结构，比如添加、移除或维护这些元素。
 * 像其它指令一样，你可以把结构型指令应用到一个宿主元素上。 然后它就可以对宿主元素及其子元素做点什么。
 * 结构型指令非常容易识别。 在这个例子中，星号（*）被放在指令的属性名之前。
 * <div *ngIf="hero" class="name">{{hero.name}}</div>
 * 没有方括号，没有圆括号，只是把 *ngIf 设置为一个字符串。
 *
 * 在这个例子中，你将学到星号(*)这个简写方法，
 * 而这个字符串是一个微语法，而不是通常的模板表达式。
 * Angular 会解开这个语法糖，变成一个 <ng-template> 标记，包裹着宿主元素及其子元素。
 * 每个结构型指令都可以用这个模板做点不同的事情。
 *
 * 三个常用的内置结构型指令 —— NgIf、NgFor和NgSwitch...。
 * 你在模板语法一章中学过它，并且在 Angular 文档的例子中到处都在用它。
 * 下面是模板中的例子：
 * <div *ngIf="hero" class="name">{{hero.name}}</div>
 *
 * <ul>
 *     <li *ngFor="let hero of heroes">{{hero.name}}</li>
 * </ul>
 *
 * <div [ngSwitch]="hero?.emotion">
 *     <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="hero"></app-happy-hero>
 *     <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="hero"></app-sad-hero>
 *     <app-confused-hero *ngSwitchCase="'app-confused'" [hero]="hero"></app-confused-hero>
 *     <app-unknown-hero  *ngSwitchDefault           [hero]="hero"></app-unknown-hero>
 * </div>
 *
 * 指令的拼写形式
 * 在本章中，你将看到指令同时具有两种拼写形式大驼峰 UpperCamelCase 和小驼峰 lowerCamelCase，
 * 比如你已经看过的 NgIf 和 ngIf。
 * 这里的原因在于，NgIf 引用的是指令的类名，而 ngIf 引用的是指令的属性名*。
 *
 * 指令的类名拼写成大驼峰形式（NgIf），而它的属性名则拼写成小驼峰形式（ngIf）。
 * 本章会在谈论指令的属性和工作原理时引用指令的类名，在描述如何在 HTML 模板中把该指令应用到元素时，引用指令的属性名。
 *
 * 你可以在一个宿主元素上应用多个属性型指令，但只能应用一个结构型指令。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
