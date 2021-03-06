import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';

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
 *
 * 链式管道
 * 你可以把管道串联在一起，以组合出一些潜在的有用功能。
 * 下面这个例子中，要把 birthday 串联到 DatePipe 管道，
 * 然后又串联到 UpperCasePipe，这样就可以把生日显示成大写形式了。 生日被显示成了APR 15, 1988：
 * The chained hero's birthday is
 * {{ birthday | date | uppercase}}
 * 下面这个显示FRIDAY, APRIL 15, 1988的例子用同样的方式链接了这两个管道，而且同时还给 date 管道传进去一个参数。
 * The chained hero's birthday is
 * {{  birthday | date:'fullDate' | uppercase}}
 *
 * 自定义管道
 * 你还可以写自己的自定义管道。 下面就是一个名叫 ExponentialStrengthPipe 的管道，它可以放大英雄的能力。
 * 在这个管道的定义中体现了几个关键点：
 * 1.管道是一个带有“管道元数据(pipe metadata)”装饰器的类。
 * 2.这个管道类实现了 PipeTransform 接口的 transform 方法，该方法接受一个输入值和一些可选参数，并返回转换后的值。
 * 3.当每个输入值被传给 transform 方法时，还会带上另一个参数，比如你这个管道就有一个 exponent(放大指数) 参数。
 * 4.可以通过 @Pipe 装饰器来告诉 Angular：这是一个管道。该装饰器是从 Angular 的 core 库中引入的。
 * 5.这个 @Pipe 装饰器允许你定义管道的名字，这个名字会被用在模板表达式中。
 * 它必须是一个有效的 JavaScript 标识符。 比如，你这个管道的名字是 exponentialStrength。
 *
 * PipeTransform 接口
 * transform 方法是管道的基本要素。
 * PipeTransform接口中定义了它，并用它指导各种工具和编译器。
 * 理论上说，它是可选的。Angular 不会管它，而是直接查找并执行 transform 方法。
 *
 * 管道与变更检测
 * Angular 通过变更检测过程来查找绑定值的更改，
 * 并在每一次 JavaScript 事件之后运行：每次按键、鼠标移动、定时器以及服务器的响应。
 * 这可能会让变更检测显得很昂贵，但是 Angular 会尽可能降低变更检测的成本。
 *
 * 当使用管道时，Angular 会选用一种更简单、更快速的变更检测算法。
 *
 * “会飞的英雄”管道（FlyingHeroesPipe）
 * 往 *ngFor 重复器中添加一个 FlyingHeroesPipe 管道，这个管道能过滤出所有会飞的英雄。
 *
 * 当你往 heroes 数组中添加一个新的英雄时，这个数组的引用并没有改变。
 * 它还是那个数组。而引用却是 Angular 所关心的一切。
 * 从 Angular 的角度来看，这是同一个数组，没有变化，也就不需要更新显示。
 *
 * 要修复它，就要创建一个新数组，把这个英雄追加进去，并把它赋给 heroes。
 * 这次，Angular 检测到数组的引用变化了。
 * 它执行了这个管道，并使用这个新数组更新显示，这次它就包括新的飞行英雄了。
 *
 * 如果你修改了这个数组，没有管道被执行，也没有显示被更新。
 * 如果你替换了这个数组，管道就会被执行，显示也更新了。
 * 这个飞行英雄的例子用检查框和其它显示内容扩展了原有代码，来帮你体验这些效果。
 *
 * 直接替换这个数组是通知 Angular 更新显示的一种高效方式。
 * 你该什么时候替换这个数组呢？当数据变化的时候。
 * 在这个玩具级例子中，这是一个简单的规则，因为这里修改数据的唯一途径就是添加新英雄。
 *
 * 更多情况下，你不知道什么时候数据变化了，尤其是在那些有很多种途径改动数据的程序中 —— 可能在程序中很远的地方。
 * 组件就是一个通常无法知道那些改动的例子。
 * 此外，它会导致削足适履 —— 扭曲组件的设计来适应管道。
 * 要尽可能保持组件类独立于 HTML。组件不应该关心管道的存在。
 *
 * 为了过滤出会飞的英雄，考虑使用非纯(impure)管道。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  heroes: Hero[] = [
    {name: 'Windstorm', canFly: true},
    {name: 'Bombasto', canFly: false},
    {name: 'Magneto', canFly: false},
    {name: 'Tornado', canFly: true}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addHero(): void {
    let hs = this.heroes.filter(h => h.canFly);
    const hero = new Hero();
    hero.name = 'Tom';
    hero.canFly = true;
    this.heroes.push(hero);
  }
}
