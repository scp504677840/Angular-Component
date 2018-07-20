import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

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
 *
 * *ngFor 内幕
 * Angular 会把 *ngFor 用同样的方式把星号（）语法的 template属性转换成 <ng-template>元素*。
 * 这里有一个 NgFor 的全特性应用，同时用了这三种写法：
 * <div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
 *     ({{i}}) {{hero.name}}
 * </div>
 *
 * <ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
 *      <div [class.odd]="odd">({{i}}) {{hero.name}}</div>
 * </ng-template>
 * 它明显比 ngIf 复杂得多，确实如此。
 * NgFor 指令比本章展示过的 NgIf 具有更多的必选特性和可选特性。
 * 至少 NgFor 会需要一个循环变量（let hero）和一个列表（heroes）。
 * 你可以通过把一个字符串赋值给 ngFor 来启用这些特性，这个字符串使用 Angular 的微语法。
 *
 * ngFor 字符串之外的每一样东西都会留在宿主元素（<div>）上，
 * 也就是说它移到了 <ng-template> 内部。 在这个例子中，[ngClass]="odd" 留在了 <div> 上。
 *
 * 微语法
 * Angular 微语法能让你通过简短的、友好的字符串来配置一个指令。
 * 微语法解析器把这个字符串翻译成 <ng-template> 上的属性：
 *
 * let 关键字声明一个模板输入变量，你会在模板中引用它。
 * 本例子中，这个输入变量就是 hero、i 和 odd。
 * 解析器会把 let hero、let i 和 let odd 翻译成命名变量 let-hero、let-i 和 let-odd。
 *
 * 微语法解析器接收 of 和 trackby，
 * 把它们首字母大写（of -> Of, trackBy -> TrackBy），
 * 并且给它们加上指令的属性名（ngFor）前缀，
 * 最终生成的名字是 ngForOf 和 ngForTrackBy。
 * 还有两个 NgFor 的输入属性，指令据此了解到列表是 heroes，而 track-by 函数是 trackById。
 *
 * NgFor 指令在列表上循环，每个循环中都会设置和重置它自己的上下文对象上的属性。
 * 这些属性包括 index 和 odd 以及一个特殊的属性名 $implicit（隐式变量）。
 *
 * let-i 和 let-odd 变量是通过 let i=index 和 let odd=odd 来定义的。
 * Angular 把它们设置为上下文对象中的 index 和 odd 属性的当前值。
 *
 * 这里并没有指定 let-hero 的上下文属性。它的来源是隐式的。
 * Angular 将 let-hero 设置为此上下文中 $implicit 属性的值，
 * 它是由 NgFor 用当前迭代中的英雄初始化的。
 *
 * API 参考手册中描述了 NgFor 指令的其它属性和上下文属性。
 * https://www.angular.cn/api/common/NgForOf
 *
 * NgFor 是由 NgForOf 指令来实现的。请参阅NgForOf API reference来了解 NgForOf 指令的更多属性及其上下文属性。
 * https://www.angular.cn/api/common/NgForOf
 *
 * 模板输入变量
 * 模板输入变量是这样一种变量，你可以在单个实例的模板中引用它的值。
 * 这个例子中有好几个模板输入变量：hero、i 和 odd。 它们都是用 let 作为前导关键字。
 *
 * 模板输入变量和模板引用变量是不同的，无论是在语义上还是语法上。
 *
 * 你使用 let 关键字（如 let hero）在模板中声明一个模板输入变量。
 * 这个变量的范围被限制在所重复模板的单一实例上。
 * 事实上，你可以在其它结构型指令中使用同样的变量名。
 *
 * 而声明模板引用变量使用的是给变量名加 # 前缀的方式（#var）。
 * 一个引用变量引用的是它所附着到的元素、组件或指令。
 * 它可以在整个模板的任意位置访问。
 *
 * 模板输入变量和引用变量具有各自独立的命名空间。
 * let hero 中的 hero 和 #hero 中的 hero 并不是同一个变量。
 *
 * 每个宿主元素上只能有一个结构型指令
 * 有时你会希望只有当特定的条件为真时才重复渲染一个 HTML 块。
 * 你可能试过把 *ngFor 和 *ngIf 放在同一个宿主元素上，但 Angular 不允许。
 * 这是因为你在一个元素上只能放一个结构型指令。
 *
 * 原因很简单。
 * 结构型指令可能会对宿主元素及其子元素做很复杂的事。
 * 当两个指令放在同一个元素上时，谁先谁后？
 * NgIf 优先还是 NgFor 优先？NgIf 可以取消 NgFor 的效果吗？
 * 如果要这样做，Angular 应该如何把这种能力泛化，以取消其它结构型指令的效果呢？
 *
 * 对这些问题，没有办法简单回答。
 * 而禁止多个结构型指令则可以简单地解决这个问题。
 * 这种情况下有一个简单的解决方案：把 *ngIf 放在一个"容器"元素上，再包装进 *ngFor 元素。
 * 这个元素可以使用ng-container，以免引入一个新的 HTML 层级。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
