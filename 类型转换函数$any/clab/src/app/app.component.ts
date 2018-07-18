import {Component} from '@angular/core';
import {Hero} from './hero';

/**
 * 模板表达式操作符
 *
 * 模板表达式语言使用了 JavaScript 语法的子集，并补充了几个用于特定场景的特殊操作符。
 * 下面介绍其中的两个：管道和安全导航操作符。
 *
 * 类型转换函数 $any （$any( <表达式> )）
 * 有时候，绑定表达式可能会报类型错误，并且它不能或很难指定类型。
 * 要消除这种报错，你可以使用 $any 转换函数来把表达式转换成 any 类型。
 * <div>The hero's marker is {{$any(hero).marker}}</div>
 * 在这个例子中，当 Angular 编译器把模板转换成 TypeScript 代码时，
 * $any 表达式可以防止 TypeScript 编译器报错说 marker 不是 Hero 接口的成员。
 *
 * $any 转换函数可以和 this 联合使用，以便访问组件中未声明过的成员。
 * <div>Undeclared members is {{$any(this).member}}</div>
 *
 * $any 转换函数可以在绑定表达式中任何可以进行方法调用的地方使用。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hero: Hero = {id: 1, name: 'Tom'};

}
