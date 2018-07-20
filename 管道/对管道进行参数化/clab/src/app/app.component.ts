import {Component, OnInit} from '@angular/core';

/**
 * 管道
 * 每个应用开始的时候差不多都是一些简单任务：获取数据、转换它们，然后把它们显示给用户。
 * 获取数据可能简单到创建一个局部变量就行，也可能复杂到从 WebSocket 中获取数据流。
 *
 * 一旦取到数据，你就可以把它们原始值的 toString 结果直接推入视图中。
 * 但这种做法很少能具备良好的用户体验。
 * 比如，几乎每个人都更喜欢简单的日期格式，
 * 例如1988-04-15，而不是服务端传过来的原始字符串格式 —— Fri Apr 15 1988 00:00:00 GMT-0700 (Pacific Daylight Time)。
 *
 * 显然，有些值最好显示成用户友好的格式。
 * 你很快就会发现，在很多不同的应用中，都在重复做出某些相同的变换。
 * 你几乎会把它们看做某种 CSS 样式，事实上，你也确实更喜欢在 HTML 模板中应用它们 —— 就像 CSS 样式一样。
 *
 * 通过引入 Angular 管道，你可以把这种简单的“显示-值”转换器声明在 HTML 中。
 *
 * 使用管道
 * 管道把数据作为输入，然后转换它，给出期望的输出。 你要把组件的 birthday 属性转换成对人类更友好的日期格式。
 * 在这个插值表达式中，你让组件的 birthday 值通过管道操作符( | )流动到 右侧的Date 管道函数中。
 * 所有管道都会用这种方式工作。
 *
 * 内置的管道
 * Angular 内置了一些管道，
 * 比如 DatePipe、UpperCasePipe、LowerCasePipe、CurrencyPipe 和 PercentPipe。
 * 它们全都可以直接用在任何模板中。
 * 更多API参看https://www.angular.cn/api?type=pipe
 *
 * 对管道进行参数化
 * 管道可能接受任何数量的可选参数来对它的输出进行微调。
 * 可以在管道名后面添加一个冒号( : )再跟一个参数值，
 * 来为管道添加参数(比如 currency:'EUR')。
 * 如果这个管道可以接受多个参数，那么就用冒号来分隔这些参数值(比如 slice:1:5)。
 *
 * 修改生日模板，来为这个日期管道提供一个格式化参数。
 * 当格式化完该英雄的 4 月 15 日生日之后，它应该被渲染成04/15/88。
 *
 * 参数值可以是任何有效的模板表达式（参见模板语法中的模板表达式部分），比如字符串字面量或组件的属性。
 * 换句话说，借助属性绑定，你也可以像用绑定来控制生日的值一样，控制生日的显示格式。
 *
 * 来写第二个组件，它把管道的格式参数绑定到该组件的 format 属性。这里是新组件的模板：
 * 你还能在模板中添加一个按钮，并把它的点击事件绑定到组件的 toggleFormat() 方法。
 * 此方法会在短日期格式('shortDate')和长日期格式('fullDate')之间切换组件的 format 属性。
 *
 * 当你点击按钮的时候，显示的日志会在“04/15/1988”和“Friday, April 15, 1988”之间切换。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';

  // ---------------------------------
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }


  constructor() {
  }

  ngOnInit() {
  }
}
