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
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988

  constructor() {
  }

  ngOnInit() {
  }
}
