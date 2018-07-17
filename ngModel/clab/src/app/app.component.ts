import {Component} from '@angular/core';

/**
 * 内置指令
 * 下面来看一下那些最常用的内置指令。它们可分为属性型指令 或 结构型指令。
 *
 * 内置属性型指令
 * 属性型指令会监听和修改其它 HTML 元素或组件的行为、元素属性（Attribute）、DOM 属性（Property）。
 * 它们通常会作为 HTML 属性的名称而应用在元素上。
 * 很多 Angular 模块，比如RouterModule和FormsModule都定义了自己的属性型指令。
 * 本节将会介绍几个最常用的属性型指令：
 * NgClass - 添加或移除一组 CSS 类
 * NgStyle - 添加或移除一组 CSS 样式
 * NgModel - 双向绑定到 HTML 表单元素
 *
 * NgModel - 使用[(ngModel)]双向绑定到表单元素
 * 当开发数据输入表单时，你通常都要既显示数据属性又根据用户的更改去修改那个属性。
 * 使用 NgModel 指令进行双向数据绑定可以简化这种工作。例子如下：
 * <input [(ngModel)]="currentHero.name">
 *
 * 使用 ngModel 时需要 FormsModule
 * 在使用 ngModel 指令进行双向数据绑定之前，
 * 你必须导入 FormsModule 并把它添加到 Angular 模块的 imports 列表中。
 *
 * [(ngModel)]内幕
 * 回头看看 name 绑定，注意，你可以通过分别绑定到 <input> 元素的 value 属性和 input 事件来达到同样的效果。
 * <input [value]="currentHero.name" (input)="currentHero.name=$event.target.value" >
 * 那样显得很笨重，谁会记得该设置哪个元素属性以及当用户修改时触发哪个事件？
 * 你该如何提取输入框中的文本并且更新数据属性？谁会希望每次都去查资料来确定这些？
 *
 * ngModel 指令通过自己的输入属性 ngModel 和输出属性 ngModelChange 隐藏了那些细节。
 * <input [ngModel]="currentHero.name" (ngModelChange)="currentHero.name=$event">
 *
 * ngModel 输入属性会设置该元素的值，并通过 ngModelChange 的输出属性来监听元素值的变化。
 * 各种元素都有很多特有的处理细节，
 * 因此 NgModel 指令只支持实现了ControlValueAccessor的元素， 它们能让元素适配本协议。
 * <input> 输入框正是其中之一。
 * Angular 为所有的基础 HTML 表单都提供了值访问器（Value accessor）。
 * 你不能把 [(ngModel)] 用到非表单类的原生元素或第三方自定义组件上，除非写一个合适的值访问器，这种技巧超出了本章的范围。
 * 你自己写的 Angular 组件不需要值访问器，
 * 因为你可以让值和事件的属性名适应 Angular 基本的双向绑定语法，而不使用 NgModel。
 * 前面看过的 sizer就是使用这种技巧的例子。
 *
 * 使用独立的 ngModel 绑定优于绑定到该元素的原生属性，你可以做得更好。
 *
 * 你不用被迫两次引用这个数据属性，Angular 可以捕获该元素的数据属性，
 * 并且通过一个简单的声明来设置它，这样它就可以使用 [(ngModel)] 语法了。
 *
 * [(ngModel)] 就是你需要的一切吗？有没有什么理由回退到它的展开形式？
 * [(ngModel)] 语法只能设置数据绑定属性。 如果要做更多或者做点不一样的事，也可以写它的展开形式。
 * 下面这个生造的例子强制输入框的内容变成大写：
 * <input [ngModel]="currentHero.name" (ngModelChange)="setUppercaseName($event)">
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = '';

  setUppercaseName(str) {
    this.name = str.toUpperCase();
  }
}
