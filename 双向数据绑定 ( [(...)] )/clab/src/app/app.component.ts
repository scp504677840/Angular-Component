import {Component} from '@angular/core';

/**
 * 双向数据绑定 ( [(...)] )
 * 你经常需要显示数据属性，并在用户作出更改时更新该属性。
 * 在元素层面上，既要设置元素属性，又要监听元素事件变化。
 * Angular 为此提供一种特殊的双向数据绑定语法：[(x)]。
 * [(x)] 语法结合了属性绑定的方括号 [x] 和事件绑定的圆括号 (x)。
 *
 * 当一个元素拥有可以设置的属性 x 和对应的事件 xChange 时，解释 [(x)] 语法就容易多了。
 * 下面的 SizerComponent 符合这个模式。它有 size 属性和配套的 sizeChange 事件是该项目例子。
 *
 * SizerComponent.size 初始值是 AppComponent.fontSizePx。
 * 点击按钮时，通过双向绑定更新 AppComponent.fontSizePx。
 * 被修改的 AppComponent.fontSizePx 通过样式绑定，改变文本的显示大小。
 *
 * 双向绑定语法实际上是属性绑定和事件绑定的语法糖。 Angular 将 SizerComponent 的绑定分解成这样：
 * <app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>
 *
 * $event 变量包含了 SizerComponent.sizeChange 事件的荷载。
 * 当用户点击按钮时，Angular 将 $event 赋值给 AppComponent.fontSizePx。
 * 显然，比起单独绑定属性和事件，双向数据绑定语法显得非常方便。
 * 如果能在像 <input> 和 <select> 这样的 HTML 元素上使用双向数据绑定就更好了。
 * 可惜，原生 HTML 元素不遵循 x 值和 xChange 事件的模式。
 * 幸运的是，Angular 以 NgModel 指令为桥梁，允许在表单元素上使用双向数据绑定。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fontSizePx: Number = 8;

}
