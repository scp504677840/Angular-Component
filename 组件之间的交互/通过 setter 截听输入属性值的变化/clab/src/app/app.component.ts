import {Component} from '@angular/core';

/**
 * 组件之间的交互
 *
 * 通过 setter 截听输入属性值的变化
 * 使用一个输入属性的 setter，以拦截父组件中值的变化，并采取行动。
 * 子组件 NameChildComponent 的输入属性 name 上的这个 setter，会 trim 掉名字里的空格，并把空值替换成默认字符串。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
