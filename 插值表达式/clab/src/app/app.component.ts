import {Component} from '@angular/core';

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
  name = 'Windstorm';
}
