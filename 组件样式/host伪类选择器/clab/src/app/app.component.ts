import {Component} from '@angular/core';

/**
 * 组件样式
 * Angular 应用使用标准的 CSS 来设置样式。
 * 这意味着你可以把关于 CSS 的那些知识和技能直接用于 Angular 程序中，例如：样式表、选择器、规则以及媒体查询等。
 * 另外，Angular 还能把组件样式捆绑在组件上，以实现比标准样式表更加模块化的设计。
 * 本章将会讲解如何加载和使用这些组件样式。
 *
 * 特殊的选择器
 * 组件样式中有一些从影子(Shadow) DOM 样式范围领域（记录在W3C的CSS Scoping Module Level 1中） 引入的特殊选择器：
 * :host 选择器
 * 使用 :host 伪类选择器，用来选择组件宿主元素中的元素（相对于组件模板内部的元素）。
 *
 * :host 选择是是把宿主元素作为目标的唯一方式。
 * 除此之外，你将没办法指定它， 因为宿主不是组件自身模板的一部分，而是父组件模板的一部分。
 * 要把宿主样式作为条件，就要像函数一样把其它选择器放在 :host 后面的括号中。
 * 下一个例子再次把宿主元素作为目标，但是只有当它同时带有 active CSS 类的时候才会生效。
 * :host(.active) {
 *    border-width: 3px;
 * }
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
