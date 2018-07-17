import {Component} from '@angular/core';

/**
 * 属性绑定 ( [属性名] )
 * 当要把视图元素的属性 (property) 设置为模板表达式时，就要写模板的属性 (property) 绑定。
 * 最常用的属性绑定是把元素属性设置为组件属性的值。
 * 下面这个例子中，image 元素的 src 属性会被绑定到组件的 heroImageUrl 属性上：
 * <img [src]="heroImageUrl">
 * 另一个例子是当组件说它 isUnchanged（未改变）时禁用按钮：
 * <button [disabled]="isUnchanged">Cancel is disabled</button>
 * 另一个例子是设置指令的属性：
 * <div [ngClass]="classes">[ngClass] binding to the classes property</div>
 * 还有另一个例子是设置自定义组件的模型属性（这是父子组件之间通讯的重要途径）：
 * <app-hero-detail [hero]="currentHero"></app-hero-detail>
 *
 * 单向输入
 * 人们经常把属性绑定描述成单向数据绑定，因为值的流动是单向的，从组件的数据属性流动到目标元素的属性。
 * 不能使用属性绑定来从目标元素拉取值，也不能绑定到目标元素的属性来读取它。只能设置它。
 *
 * 绑定目标
 * 包裹在方括号中的元素属性名标记着目标属性。下列代码中的目标属性是 image 元素的 src 属性。
 * <img [src]="heroImageUrl">
 * 有些人喜欢用 bind- 前缀的可选形式，并称之为规范形式：
 * <img bind-src="heroImageUrl">
 * 目标的名字总是 property 的名字。
 * 即使它看起来和别的名字一样。
 * 看到 src 时，可能会把它当做 attribute。不！它不是！它是 image 元素的 property 名。
 * 元素属性可能是最常见的绑定目标，但 Angular 会先去看这个名字是否是某个已知指令的属性名，就像下面的例子中一样：
 * <div [ngClass]="classes">[ngClass] binding to the classes property</div>
 *
 * 严格来说，Angular 正在匹配指令的输入属性的名字。
 * 这个名字是指令的 inputs 数组中所列的名字，或者是带有 @Input() 装饰器的属性。 这些输入属性被映射为指令自己的属性。
 * 如果名字没有匹配上已知指令或元素的属性，Angular 就会报告“未知指令”的错误。
 *
 * 消除副作用
 * 正如以前讨论过的，模板表达式的计算不能有可见的副作用。
 * 表达式语言本身可以提供一部分安全保障。
 * 不能在属性绑定表达式中对任何东西赋值，也不能使用自增、自减运算符。
 * 当然，表达式可能会调用具有副作用的属性或方法。但 Angular 没法知道这一点，也没法阻止你。
 * 表达式中可以调用像 getFoo() 这样的方法。
 * 只有你知道 getFoo() 干了什么。
 * 如果 getFoo() 改变了某个东西，恰好又绑定到个这个东西，你就可能把自己坑了。
 * Angular 可能显示也可能不显示变化后的值。
 * Angular 还可能检测到变化，并抛出警告型错误。
 * 一般建议是，只绑定数据属性和那些只返回值而不做其它事情的方法。
 *
 * 返回恰当的类型
 * 模板表达式应该返回目标属性所需类型的值。
 * 如果目标属性想要个字符串，就返回字符串。
 * 如果目标属性想要个数字，就返回数字。
 * 如果目标属性想要个对象，就返回对象。
 * HeroDetail 组件的 hero 属性想要一个 Hero 对象，那就在属性绑定中精确地给它一个 Hero 对象：
 * <app-hero-detail [hero]="currentHero"></app-hero-detail>
 *
 * 一次性字符串初始化
 * 当满足下列条件时，应该省略括号：
 * - 目标属性接受字符串值。
 * - 字符串是个固定值，可以直接合并到模块中。
 * - 这个初始值永不改变。
 * 你经常这样在标准 HTML 中用这种方式初始化 attribute，
 * 这种方式也可以用在初始化指令和组件的属性。
 * 下面这个例子把 HeroDetailComponent 的 prefix 属性初始化为固定的字符串，而不是模板表达式。
 * Angular 设置它，然后忘记它。
 * <app-hero-detail prefix="You are my" [hero]="currentHero"></app-hero-detail>
 * 作为对比，[hero] 绑定是组件的 currentHero 属性的活绑定，它会一直随着更新。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
}
