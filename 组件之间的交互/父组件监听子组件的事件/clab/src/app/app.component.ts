import {Component} from '@angular/core';

/**
 * 组件之间的交互
 *
 * 父组件监听子组件的事件
 * 子组件暴露一个 EventEmitter 属性，
 * 当事件发生时，子组件利用该属性 emits(向上弹射)事件。
 * 父组件绑定到这个事件属性，并在事件发生时作出回应。
 *
 * 子组件的 EventEmitter 属性是一个输出属性，通常带有@Output 装饰器，就像在 VoterComponent 中看到的。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
