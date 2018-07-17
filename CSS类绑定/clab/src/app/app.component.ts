import {Component} from '@angular/core';

/**
 * attribute、class 和 style 绑定
 * 模板语法为那些不太适合使用属性绑定的场景提供了专门的单向数据绑定形式。
 *
 * CSS 类绑定
 * 借助 CSS 类绑定，可以从元素的 class attribute 上添加和移除 CSS 类名。
 * CSS 类绑定绑定的语法与属性绑定类似。
 * 但方括号中的部分不是元素的属性名，而是由class前缀，一个点 (.)和 CSS 类的名字组成， 其中后两部分是可选的。
 * 形如：[class.class-name]。
 * 下列例子示范了如何通过 CSS 类绑定来添加和移除应用的 "special" 类。不用绑定直接设置 attribute 时是这样的：
 * <div class="bad curly special">Bad curly special</div>
 *
 * 可以把它改写为绑定到所需 CSS 类名的绑定；
 * 这是一个或者全有或者全无的替换型绑定。 （译注：即当 badCurly 有值时 class 这个 attribute 设置的内容会被完全覆盖）
 * <div class="bad curly special" [class]="badCurly">Bad curly</div>
 *
 * 最后，可以绑定到特定的类名。 当模板表达式的求值结果是真值时，Angular 会添加这个类，反之则移除它。
 * <div [class.special]="isSpecial">The class binding is special</div>
 * <div class="special" [class.special]="!isSpecial">This one is not so special</div>
 *
 * 虽然这是切换单一类名的好办法，但人们通常更喜欢使用 NgClass 指令 来同时管理多个类名。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  badCurly = 'bad';

  isSpecial = false;

}
