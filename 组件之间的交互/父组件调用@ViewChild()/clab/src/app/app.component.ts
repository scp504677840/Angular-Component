import {Component} from '@angular/core';

/**
 * 组件之间的交互
 *
 * 父组件调用@ViewChild()
 * 这个本地变量方法是个简单便利的方法。
 * 但是它也有局限性，因为父组件-子组件的连接必须全部在父组件的模板中进行。
 * 父组件本身的代码对子组件没有访问权。
 * 如果父组件的类需要读取子组件的属性值或调用子组件的方法，就不能使用本地变量方法。
 * 当父组件类需要这种访问时，可以把子组件作为 ViewChild，注入到父组件里面。
 * 下面的例子用与倒计时相同的范例来解释这种技术。
 * 它的外观或行为没有变化。
 * 子组件CountdownTimerComponent也和原来一样。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
