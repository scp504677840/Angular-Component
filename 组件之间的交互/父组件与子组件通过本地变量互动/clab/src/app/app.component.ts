import {Component} from '@angular/core';

/**
 * 组件之间的交互
 *
 * 父组件与子组件通过本地变量互动
 * 父组件不能使用数据绑定来读取子组件的属性或调用子组件的方法。
 * 但可以在父组件模板里，新建一个本地变量来代表子组件，
 * 然后利用这个变量来读取子组件的属性和调用子组件的方法，如下例所示。
 *
 * 子组件 CountdownTimerComponent 进行倒计时，
 * 归零时发射一个导弹。
 * start 和 stop 方法负责控制时钟并在模板里显示倒计时的状态信息。
 *
 * 父组件不能通过数据绑定使用子组件的 start 和 stop 方法，也不能访问子组件的 seconds 属性。
 * 把本地变量(#timer)放到(<countdown-timer>)标签中，用来代表子组件。
 * 这样父组件的模板就得到了子组件的引用，于是可以在父组件的模板中访问子组件的所有属性和方法。
 * 这个例子把父组件的按钮绑定到子组件的 start 和 stop 方法，并用插值表达式来显示子组件的 seconds 属性。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
