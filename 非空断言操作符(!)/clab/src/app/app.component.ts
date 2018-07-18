import {Component} from '@angular/core';
import {Hero} from './hero';

/**
 * 模板表达式操作符
 *
 * 模板表达式语言使用了 JavaScript 语法的子集，并补充了几个用于特定场景的特殊操作符。
 * 下面介绍其中的两个：管道和安全导航操作符。
 *
 * 非空断言操作符(!)
 * 在 TypeScript 2.0 中，你可以使用 --strictNullChecks 标志强制开启严格空值检查。
 * TypeScript 就会确保不存在意料之外的 null 或 undefined。
 * 在这种模式下，有类型的变量默认是不允许 null 或 undefined 值的，
 * 如果有未赋值的变量，或者试图把 null 或 undefined 赋值给不允许为空的变量，类型检查器就会抛出一个错误。
 *
 * 如果类型检查器在运行期间无法确定一个变量是 null 或 undefined，那么它也会抛出一个错误。
 * 你自己可能知道它不会为空，但类型检查器不知道。
 * 所以你要告诉类型检查器，它不会为空，这时就要用到非空断言操作符。
 *
 * Angular 模板中的**非空断言操作符（!）也是同样的用途。
 *
 * 例如，在用*ngIf来检查过 hero 是已定义的之后，就可以断言 hero 属性一定是已定义的。
 * <div *ngIf="hero">
 *     The hero's name is {{hero!.name}}
 * </div>
 *
 * 在 Angular 编译器把你的模板转换成 TypeScript 代码时，
 * 这个操作符会防止 TypeScript 报告 "hero.name 可能为 null 或 undefined"的错误。
 *
 * 与安全导航操作符不同的是，非空断言操作符不会防止出现 null 或 undefined。
 * 它只是告诉 TypeScript 的类型检查器对特定的属性表达式，不做 "严格空值检测"。
 *
 * 如果你打开了严格控制检测，那就要用到这个模板操作符，而其它情况下则是可选的。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hero: Hero = {id: 1, name: 'Tom'};

}
