import {Component} from '@angular/core';

/**
 * 模板语句
 * 模板语句用来响应由绑定目标（如 HTML 元素、组件或指令）触发的事件。
 * 模板语句将在事件绑定一节看到，它出现在 = 号右侧的引号中，就像这样：(event)="statement"。
 *
 * 模板语句有副作用。 这是事件处理的关键。因为你要根据用户的输入更新应用状态。
 * 响应事件是 Angular 中“单向数据流”的另一面。 在一次事件循环中，可以随意改变任何地方的任何东西。
 *
 * 和模板表达式一样，模板语句使用的语言也像 JavaScript。
 * 模板语句解析器和模板表达式解析器有所不同，特别之处在于它支持基本赋值 (=) 和表达式链 (; 和 ,)。
 * 然而，某些 JavaScript 语法仍然是不允许的：
 * - new 运算符
 * - 自增和自减运算符：++ 和 --
 * - 操作并赋值，例如 += 和 -=
 * - 位操作符 | 和 &
 * - 模板表达式运算符
 *
 * 语句上下文
 * 和表达式中一样，语句只能引用语句上下文中 —— 通常是正在绑定事件的那个组件实例。
 * 典型的语句上下文就是当前组件的实例。 (click)="deleteHero()" 中的 deleteHero 就是这个数据绑定组件上的一个方法。
 * <button (click)="deleteHero()">Delete hero</button>
 *
 * 语句上下文可以引用模板自身上下文中的属性。
 * 在下面的例子中，就把模板的 $event 对象、模板输入变量 (let hero)和模板引用变量 (#heroForm)传给了组件中的一个事件处理器方法。
 * <button (click)="onSave($event)">Save</button>
 * <button *ngFor="let hero of heroes" (click)="deleteHero(hero)">{{hero.name}}</button>
 * <form #heroForm (ngSubmit)="onSubmit(heroForm)"> ... </form>
 * 模板上下文中的变量名的优先级高于组件上下文中的变量名。
 * 在上面的 deleteHero(hero) 中，hero 是一个模板输入变量，而不是组件中的 hero 属性。
 * 模板语句不能引用全局命名空间的任何东西。比如不能引用 window 或 document，也不能调用 console.log 或 Math.max。
 *
 * 语句指南
 * 和表达式一样，避免写复杂的模板语句。
 * 常规是函数调用或者属性赋值。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  num = 1;

  add(): void {
    this.num++;
  }

  show(event): void {
    console.log(event.target.textContent);
  }

  print(ref): void {
    console.log(ref.textContent);
  }

}
