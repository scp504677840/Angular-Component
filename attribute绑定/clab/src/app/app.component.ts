import {Component} from '@angular/core';

/**
 * attribute、class 和 style 绑定
 * 模板语法为那些不太适合使用属性绑定的场景提供了专门的单向数据绑定形式。
 *
 * attribute 绑定
 * 可以通过attribute 绑定来直接设置 attribute 的值。
 * 这是“绑定到目标属性 (property)”这条规则中唯一的例外。这是唯一的能创建和设置 attribute 的绑定形式。
 *
 * 当元素没有属性可绑的时候，就必须使用 attribute 绑定。
 * 考虑 ARIA， SVG 和 table 中的 colspan/rowspan 等 attribute。
 * 它们是纯粹的 attribute，没有对应的属性可供绑定。
 *
 * 如果想写出类似下面这样的东西，就会暴露出痛点了：
 * <tr><td colspan="{{1 + 1}}">Three-Four</td></tr>
 * 会得到这个错误：
 * Template parse errors:
 * Can't bind to 'colspan' since it isn't a known native property
 * 正如提示中所说，<td> 元素没有 colspan 属性。
 * 但是插值表达式和属性绑定只能设置属性，不能设置 attribute。
 * 你需要 attribute 绑定来创建和绑定到这样的 attribute。
 *
 * attribute 绑定的语法与属性绑定类似。
 * 但方括号中的部分不是元素的属性名，而是由attr前缀，一个点 (.) 和 attribute 的名字组成。
 * 可以通过值为字符串的表达式来设置 attribute 的值。
 *
 * 这里把 [attr.colspan] 绑定到一个计算值。
 *
 * attribute 绑定的主要用例之一是设置 ARIA attribute（译注：ARIA 指可访问性，用于给残障人士访问互联网提供便利）， 就像这个例子中一样：
 * <button [attr.aria-label]="actionName">{{actionName}} with Aria</button>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
