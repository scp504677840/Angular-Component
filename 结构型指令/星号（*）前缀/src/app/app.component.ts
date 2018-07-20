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
 *
 * NgIf 案例分析
 *
 * NgIf 是一个很好的结构型指令案例：它接受一个布尔值，并据此让一整块 DOM 树出现或消失。
 * ngIf 指令并不是使用 CSS 来隐藏元素的。它会把这些元素从 DOM 中物理删除。 使用浏览器的开发者工具就可以确认这一点。
 * 当条件为假时，NgIf 会从 DOM 中移除它的宿主元素，
 * 取消它监听过的那些 DOM 事件，从 Angular 变更检测中移除该组件，并销毁它。
 * 这些组件和 DOM 节点可以被当做垃圾收集起来，并且释放它们占用的内存。
 *
 * 为什么移除而不是隐藏？
 * 指令也可以通过把它的 display 风格设置为 none 而隐藏不需要的段落。
 *
 * 对于简单的段落，隐藏和移除之间的差异影响不大，但对于资源占用较多的组件是不一样的。
 * 当隐藏掉一个元素时，组件的行为还在继续 —— 它仍然附加在它所属的 DOM 元素上， 它也仍在监听事件。
 * Angular 会继续检查哪些能影响数据绑定的变更。 组件原本要做的那些事情仍在继续。
 *
 * 虽然不可见，组件及其各级子组件仍然占用着资源，而这些资源如果分配给别人可能会更有用。
 * 在性能和内存方面的负担相当可观，响应度会降低，而用户却可能无法从中受益。
 *
 * 当然，从积极的一面看，重新显示这个元素会非常快。
 * 组件以前的状态被保留着，并随时可以显示。
 * 组件不用重新初始化 —— 该操作可能会比较昂贵。 这时候隐藏和显示就成了正确的选择。
 *
 * 但是，除非有非常强烈的理由来保留它们，否则你会更倾向于移除用户看不见的那些 DOM 元素，
 * 并且使用 NgIf 这样的结构型指令来收回用不到的资源。
 *
 * 同样的考量也适用于每一个结构型指令，无论是内置的还是自定义的。
 * 你应该提醒自己慎重考虑添加元素、移除元素以及创建和销毁组件的后果。
 *
 * 星号（*）前缀
 * 你可能注意到了指令名的星号（*）前缀，并且困惑于为什么需要它以及它是做什么的。
 * 这里的 *ngIf 会在 hero 存在时显示英雄的名字。
 * <div *ngIf="hero" class="name">{{hero.name}}</div>
 * 星号是一个用来简化更复杂语法的“语法糖”。
 * 从内部实现来说，Angular 把 *ngIf 属性 翻译成一个 <ng-template> 元素 并用它来包裹宿主元素，代码如下：
 * <ng-template [ngIf]="hero">
 *     <div class="name">{{hero.name}}</div>
 * </ng-template>
 * *ngIf 指令被移到了 <ng-template> 元素上。在那里它变成了一个属性绑定 [ngIf]。
 * <div> 上的其余部分，包括它的 class 属性在内，移到了内部的 <ng-template> 元素上。
 * 第一种形态永远不会真的渲染出来。 只有最终产出的结果才会出现在 DOM 中。
 * Angular 会在真正渲染的时候填充 <ng-template> 的内容，并且把 <ng-template> 替换为一个供诊断用的注释。
 * NgFor和NgSwitch...指令也都遵循同样的模式。
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
