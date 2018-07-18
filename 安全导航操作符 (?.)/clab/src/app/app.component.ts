import {Component} from '@angular/core';
import {Hero} from './hero';

/**
 * 模板表达式操作符
 *
 * 模板表达式语言使用了 JavaScript 语法的子集，并补充了几个用于特定场景的特殊操作符。
 * 下面介绍其中的两个：管道和安全导航操作符。
 *
 * 安全导航操作符 ( ?. ) 和空属性路径
 * Angular 的安全导航操作符 (?.) 是一种流畅而便利的方式，
 * 用来保护出现在属性路径中 null 和 undefined 值。
 * 下例中，当 currentHero 为空时，保护视图渲染器，让它免于失败。
 * The current hero's name is {{currentHero?.name}}
 * 如果下列数据绑定中 title 属性为空，会发生什么？
 * The title is {{title}}
 * 这个视图仍然被渲染出来，但是显示的值是空；只能看到 “The title is”，它后面却没有任何东西。
 * 这是合理的行为。至少应用没有崩溃。
 *
 * 假设模板表达式涉及属性路径，在下例中，显示一个空 (null) 英雄的 name。
 * The null hero's name is {{nullHero.name}}
 * JavaScript 抛出了空引用错误，Angular 也是如此：
 * TypeError: Cannot read property 'name' of null in [null].
 * 晕，整个视图都不见了。
 * 如果确信 hero 属性永远不可能为空，可以声称这是合理的行为。
 * 如果它必须不能为空，但它仍然是空值，实际上是制造了一个编程错误，它应该被捕获和修复。
 * 这种情况应该抛出异常。
 * 另一方面，属性路径中的空值可能会时常发生，特别是数据目前为空但最终会出现。
 * 当等待数据的时候，视图渲染器不应该抱怨，而应该把这个空属性路径显示为空白，就像上面 title 属性那样。
 * 不幸的是，当 currentHero 为空的时候，应用崩溃了。
 * 可以通过用NgIf代码环绕它来解决这个问题。
 * <div *ngIf="nullHero">The null hero's name is {{nullHero.name}}</div>
 * 或者可以尝试通过 && 来把属性路径的各部分串起来，让它在遇到第一个空值的时候，就返回空。
 * The null hero's name is {{nullHero && nullHero.name}}
 * 这些方法都有价值，但是会显得笨重，特别是当这个属性路径非常长的时候。
 * 想象一下在一个很长的属性路径（如 a.b.c.d）中对空值提供保护。
 *
 * Angular 安全导航操作符 (?.) 是在属性路径中保护空值的更加流畅、便利的方式。
 * 表达式会在它遇到第一个空值的时候跳出。
 * 显示是空的，但应用正常工作，而没有发生错误。
 * The null hero's name is {{nullHero?.name}}
 * 在像 a?.b?.c?.d 这样的长属性路径中，它工作得很完美。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hero: Hero;

}
