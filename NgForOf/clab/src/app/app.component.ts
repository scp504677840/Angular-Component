import {Component} from '@angular/core';

/**
 * 内置指令
 * 下面来看一下那些最常用的内置指令。它们可分为属性型指令 或 结构型指令。
 *
 * 内置属性型指令
 * 属性型指令会监听和修改其它 HTML 元素或组件的行为、元素属性（Attribute）、DOM 属性（Property）。
 * 它们通常会作为 HTML 属性的名称而应用在元素上。
 * 很多 Angular 模块，比如RouterModule和FormsModule都定义了自己的属性型指令。
 * 本节将会介绍几个最常用的属性型指令：
 * NgClass - 添加或移除一组 CSS 类
 * NgStyle - 添加或移除一组 CSS 样式
 * NgModel - 双向绑定到 HTML 表单元素
 *
 * 内置结构型指令
 * 结构型指令的职责是 HTML 布局。
 * 它们塑造或重塑 DOM 的结构，这通常是通过添加、移除和操纵它们所附加到的宿主元素来实现的。
 * 常见结构型指令的简介：
 * NgIf - 根据条件把一个元素添加到 DOM 中或从 DOM 移除
 * NgSwitch 一组指令，用来在多个可选视图之间切换。
 * NgForOf - 对列表中的每个条目重复套用同一个模板
 *
 * NgForOf
 * NgFor 是一个重复器指令 —— 自定义数据显示的一种方式。
 * 你的目标是展示一个由多个条目组成的列表。
 * 首先定义了一个 HTML 块，它规定了单个条目应该如何显示。
 * 再告诉 Angular 把这个块当做模板，渲染列表中的每个条目。
 *
 * 下例中，NgFor 应用在一个简单的 <div> 上：
 * <div *ngFor="let hero of heroes">{{hero.name}}</div>
 * 也可以把 NgFor 应用在一个组件元素上，就下例这样：
 * <app-hero-detail *ngFor="let hero of heroes" [hero]="hero"></app-hero-detail>
 *
 * 赋值给 *ngFor 的文本是用于指导重复器如何工作的指令。
 * NgFor 微语法
 * 赋值给 *ngFor 的字符串不是模板表达式。
 * 它是一个微语法 —— 由 Angular 自己解释的小型语言。
 * 在这个例子中，字符串 "let hero of heroes" 的含义是：
 *  取出 heroes 数组中的每个英雄，把它存入局部变量 hero 中，并在每次迭代时对模板 HTML 可用
 * Angular 把这个指令翻译成了一个 <ng-template> 包裹的宿主元素，
 * 然后使用这个模板重复创建出一组新元素，并且绑定到列表中的每一个 hero。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = ['one', 'tow', 'three'];
}
