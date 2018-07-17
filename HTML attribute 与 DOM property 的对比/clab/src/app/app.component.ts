import {Component} from '@angular/core';

/**
 * 译注：由于 HTML attribute 和 DOM property 在中文中都被翻译成了“属性”，无法区分， 而接下来的部分重点是对它们进行比较。
 * 我们无法改变历史，因此，在本章的翻译中，保留了它们的英文形式，不加翻译，以免混淆。
 * 本章中，如果提到“属性”的地方，一定是指 property，因为在 Angular 中，实际上很少涉及 attribute。
 * 但在其它章节中，为简单起见，凡是能通过上下文明显区分开的，就仍统一译为“属性”， 区分不明显的，会加注英文。
 *
 * 除了插值表达式之外的绑定类型，在等号左边是目标名， 无论是包在括号中 ([]、()) 还是用前缀形式 (bind-、on-、bindon-) 。
 * 这个目标名就是属性（Property）的名字。
 * 它可能看起来像是元素属性（Attribute）的名字，但它不是。
 * 要理解它们的不同点，你必须尝试用另一种方式来审视模板中的 HTML。
 *
 * 新的思维模型
 * 数据绑定的威力和允许用自定义标记扩展 HTML 词汇的能力，会让你把模板 HTML 当成 HTML+。
 * 它其实就是 HTML+。 但它也跟你曾使用的 HTML 有着显著的不同。 这里需要一种新的思维模型。
 * 在正常的 HTML 开发过程中，你使用 HTML 元素来创建视觉结构， 通过把字符串常量设置到元素的 attribute 来修改那些元素。
 * <div class="special">Mental Model</div>
 * <img src="assets/images/hero.png">
 * <button disabled>Save</button>
 * 在 Angular 模板中，你仍使用同样的方式创建结构和初始化 attribute 值。
 * 然后，用封装了 HTML 的组件创建新元素，并把它们当作原生 HTML 元素在模板中使用。
 * <!-- Normal HTML -->
 * <div class="special">Mental Model</div>
 * <!-- Wow! A new element! -->
 * <app-hero-detail></app-hero-detail>
 * 这就是 HTML+。
 * 现在开始学习数据绑定。你碰到的第一种数据绑定是这样的：
 * <!-- Bind button disabled state to `isUnchanged` property -->
 * <button [disabled]="isUnchanged">Save</button>
 * 过会儿再认识那个怪异的方括号记法。
 * 直觉告诉你，你正在绑定按钮的 disabled attribute。
 * 并把它设置为组件的 isUnchanged 属性的当前值。
 * 但你的直觉是错的！
 * 日常的 HTML 思维模式在误导着你。
 * 实际上，一旦开始数据绑定，就不再跟 HTML attribute 打交道了。
 * 这里不是设置 attribute，而是设置 DOM 元素、组件和指令的 property。
 *
 * HTML attribute 与 DOM property 的对比
 * 要想理解 Angular 绑定如何工作，重点是搞清 HTML attribute 和 DOM property 之间的区别。
 * attribute 是由 HTML 定义的。property 是由 DOM (Document Object Model) 定义的。
 * 少量 HTML attribute 和 property 之间有着 1:1 的映射，如 id。
 * 有些 HTML attribute 没有对应的 property，如 colspan。
 * 有些 DOM property 没有对应的 attribute，如 textContent。
 * 大量 HTML attribute 看起来映射到了 property…… 但却不像你想的那样！
 * 最后一类尤其让人困惑…… 除非你能理解这个普遍原则：
 * attribute 初始化 DOM property，然后它们的任务就完成了。property 的值可以改变；attribute 的值不能改变。
 * 例如，当浏览器渲染 <input type="text" value="Bob"> 时，
 * 它将创建相应 DOM 节点， 它的 value 这个 property 被初始化为 “Bob”。
 * 当用户在输入框中输入 “Sally” 时，DOM 元素的 value 这个 property 变成了 “Sally”。
 * 但是该 HTML 的 value 这个 attribute 保持不变。
 * 如果你读取 input 元素的 attribute，就会发现确实没变： input.getAttribute('value') // 返回 "Bob"。
 * HTML 的 value 这个 attribute 指定了初始值；DOM 的 value 这个 property 是当前值。
 * disabled 这个 attribute 是另一种特例。
 * 按钮的 disabled 这个 property 是 false，因为默认情况下按钮是可用的。
 * 当你添加 disabled 这个 attribute 时，只要它出现了按钮的 disabled 这个 property 就初始化为 true，于是按钮就被禁用了。
 * 添加或删除 disabled 这个 attribute 会禁用或启用这个按钮。
 * 但 attribute 的值无关紧要，这就是你为什么没法通过 <button disabled="false">仍被禁用</button> 这种写法来启用按钮。
 * 设置按钮的 disabled 这个 property（如，通过 Angular 绑定）可以禁用或启用这个按钮。 这就是 property 的价值。
 * 就算名字相同，HTML attribute 和 DOM property 也不是同一样东西。
 *
 * 这句话值得再强调一次： 模板绑定是通过 property 和事件来工作的，而不是 attribute。
 *
 * 在 Angular 的世界中，attribute 唯一的作用是用来初始化元素和指令的状态。
 * 当进行数据绑定时，只是在与元素和指令的 property 和事件打交道，而 attribute 就完全靠边站了。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDisable: Boolean = false;

  changeDisable() {
    this.isDisable = !this.isDisable;
  }
}
