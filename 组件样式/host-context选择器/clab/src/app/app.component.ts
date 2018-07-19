import {Component, HostBinding} from '@angular/core';

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
 *
 * :host-context 选择器
 * 有时候，基于某些来自组件视图外部的条件应用样式是很有用的。
 * 例如，在文档的 <body> 元素上可能有一个用于表示样式主题 (theme) 的 CSS 类，你应当基于它来决定组件的样式。
 * 这时可以使用 :host-context() 伪类选择器。
 * 它也以类似 :host() 形式使用。
 * 它在当前组件宿主元素的祖先节点中查找 CSS 类，
 * 直到文档的根节点为止。
 * 在与其它选择器组合使用时，它非常有用。
 *
 * 在下面的例子中，只有当某个祖先元素有 CSS 类 theme-light 时，
 * 才会把 background-color 样式应用到组件内部的所有 <h2> 元素中。
 * :host-context(.theme-light) h2 {
 *   background-color: #eef;
 * }
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }

}
