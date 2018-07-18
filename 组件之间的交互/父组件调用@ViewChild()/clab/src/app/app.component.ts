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
 *
 * 把子组件的视图插入到父组件类需要做一点额外的工作。
 * 首先，你要使用 ViewChild 装饰器导入这个引用，并挂上 AfterViewInit 生命周期钩子。
 * 接着，通过 @ViewChild 属性装饰器，将子组件 CountdownTimerComponent 注入到私有属性 timerComponent 里面。
 * 组件元数据里就不再需要 #timer 本地变量了。
 * 而是把按钮绑定到父组件自己的 start 和 stop 方法，使用父组件的 seconds 方法的插值表达式来展示秒数变化。
 * 这些方法可以直接访问被注入的计时器组件。
 * ngAfterViewInit() 生命周期钩子是非常重要的一步。
 * 被注入的计时器组件只有在 Angular 显示了父组件视图之后才能访问，所以它先把秒数显示为 0.
 * 然后 Angular 会调用 ngAfterViewInit 生命周期钩子，
 * 但这时候再更新父组件视图的倒计时就已经太晚了。
 * Angular 的单向数据流规则会阻止在同一个周期内更新父组件视图。
 * 应用在显示秒数之前会被迫再等一轮。
 * 使用 setTimeout() 来等下一轮，
 * 然后改写 seconds() 方法，
 * 这样它接下来就会从注入的这个计时器组件里获取秒数的值。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
