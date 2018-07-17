import {Component} from '@angular/core';

/**
 * 事件绑定 ( (事件名) )
 * 前面遇到的绑定的数据流都是单向的：从组件到元素。
 * 但用户不会只盯着屏幕看。
 * 他们会在输入框中输入文本。
 * 他们会从列表中选取条目。
 * 他们会点击按钮。这类用户动作可能导致反向的数据流：从元素到组件。
 *
 * 知道用户动作的唯一方式是监听某些事件，如按键、鼠标移动、点击和触摸屏幕。
 * 可以通过 Angular 事件绑定来声明对哪些用户动作感兴趣。
 *
 * 事件绑定语法由等号左侧带圆括号的目标事件和右侧引号中的模板语句组成。
 * 下面事件绑定监听按钮的点击事件。每当点击发生时，都会调用组件的 onSave() 方法。
 * <button (click)="onSave()">Save</button>
 *
 * 目标事件
 * 圆括号中的名称 —— 比如 (click) —— 标记出目标事件。在下面例子中，目标是按钮的 click 事件。
 * <button (click)="onSave()">Save</button>
 * 有些人更喜欢带 on- 前缀的备选形式，称之为规范形式：
 * <button on-click="onSave()">On Save</button>
 * 元素事件可能是更常见的目标，但 Angular 会先看这个名字是否能匹配上已知指令的事件属性，就像下面这个例子：
 * <div (myClick)="clickMessage=$event" clickable>click with myClick</div>
 * 如果这个名字没能匹配到元素事件或已知指令的输出属性，Angular 就会报“未知指令”错误。
 *
 * $event 和事件处理语句
 * 在事件绑定中，Angular 会为目标事件设置事件处理器。
 * 当事件发生时，这个处理器会执行模板语句。
 * 典型的模板语句通常涉及到响应事件执行动作的接收器，例如从 HTML 控件中取得值，并存入模型。
 * 绑定会通过名叫 $event 的事件对象传递关于此事件的信息（包括数据值）。
 * 事件对象的形态取决于目标事件。
 * 如果目标事件是原生 DOM 元素事件， $event 就是 DOM 事件对象，它有像 target 和 target.value 这样的属性。
 * 考虑这个范例：
 * <input [value]="currentHero.name" (input)="currentHero.name=$event.target.value" >
 * 上面的代码在把输入框的 value 属性绑定到 currentHero.name 属性。
 * 要监听对值的修改，代码绑定到输入框的 input 事件。
 * 当用户造成更改时，input 事件被触发，并在包含了 DOM 事件对象 ($event) 的上下文中执行这条语句。
 * 要更新 currentHero.name 属性，就要通过路径 $event.target.value 来获取更改后的值。
 * 如果事件属于指令（回想一下，组件是指令的一种），那么 $event 具体是什么由指令决定。
 *
 * 使用 EventEmitter 实现自定义事件
 * 通常，指令使用 Angular EventEmitter 来触发自定义事件。
 * 指令创建一个 EventEmitter 实例，并且把它作为属性暴露出来。
 * 指令调用 EventEmitter.emit(payload) 来触发事件，可以传入任何东西作为消息载荷。
 * 父指令通过绑定到这个属性来监听事件，并通过 $event 对象来访问载荷。
 *
 * 假设 HeroDetailComponent 用于显示英雄的信息，并响应用户的动作。
 * 虽然 HeroDetailComponent 包含删除按钮，但它自己并不知道该如何删除这个英雄。
 * 最好的做法是触发事件来报告“删除用户”的请求。
 * 下面的代码节选自 HeroDetailComponent：
 * deleteRequest = new EventEmitter<Hero>();
 * delete() {
 *    this.deleteRequest.emit(this.hero);
 * }
 * 组件定义了 deleteRequest 属性，它是 EventEmitter 实例。
 * 当用户点击删除时，组件会调用 delete() 方法，让 EventEmitter 发出一个 Hero 对象。
 * 现在，假设有个宿主的父组件，它绑定了 HeroDetailComponent 的 deleteRequest 事件。
 * <app-hero-detail (deleteRequest)="deleteHero($event)" [hero]="currentHero"></app-hero-detail>
 * 当 deleteRequest 事件触发时，Angular 调用父组件的 deleteHero 方法， 在 $event 变量中传入要删除的英雄（来自 HeroDetail）。
 *
 * 模板语句有副作用
 * deleteHero 方法有副作用：它删除了一个英雄。 模板语句的副作用不仅没问题，反而正是所期望的。
 * 删除这个英雄会更新模型，还可能触发其它修改，包括向远端服务器的查询和保存。
 * 这些变更通过系统进行扩散，并最终显示到当前以及其它视图中。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show(event): void {
    console.log(event);
  }

}
