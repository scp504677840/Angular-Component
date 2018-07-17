import {Component} from '@angular/core';
import {Hero} from './hero';

/**
 * 使用插值表达式显示组件属性
 *
 * 要显示组件的属性，最简单的方式就是通过插值表达式 (interpolation) 来绑定属性名。
 * 要使用插值表达式，就把属性名包裹在双花括号里放进视图模板，如 {{myHero}}。
 *
 * 注意，你没有调用 new 来创建 AppComponent 类的实例，是 Angular 替你创建了它。那么它是如何创建的呢？
 * 注意 @Component 装饰器中指定的 CSS 选择器 selector，它指定了一个叫 app-root 的元素。
 * 该元素是 index.html 的 body 里的占位符。
 *
 * 当你通过 main.ts 中的 AppComponent 类启动时，
 * Angular 在 index.html 中查找一个 <app-root> 元素，
 * 然后实例化一个 AppComponent，并将其渲染到 <app-root> 标签中。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /**
   * 要显示一个英雄列表，先向组件中添加一个英雄名字数组，然后把 myHero 重定义为数组中的第一个名字。
   * 接着，在模板中使用 Angular 的 ngFor 指令来显示 heroes 列表中的每一项。
   */
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
}
