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
 * 模板输入变量
 * hero 前的 let 关键字创建了一个名叫 hero 的模板输入变量。
 * ngFor 指令在由父组件的 heroes 属性返回的 heroes 数组上迭代，
 * 每次迭代都从数组中把当前元素赋值给 hero 变量。
 *
 * 你可以在 ngFor 的宿主元素（及其子元素）中引用模板输入变量 hero，从而访问该英雄的属性。
 * 这里它首先在一个插值表达式中被引用到，然后通过一个绑定把它传给了 <hero-detail> 组件的 hero 属性。
 *
 * <div *ngFor="let hero of heroes">{{hero.name}}</div>
 * <app-hero-detail *ngFor="let hero of heroes" [hero]="hero"></app-hero-detail>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = ['one', 'tow', 'three'];
}
