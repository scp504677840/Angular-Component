import {Component} from '@angular/core';
import {Hero} from './hero';

/**
 * 输入和输出属性
 *
 * 输入属性是一个带有 @Input 装饰器的可设置属性。当它通过属性绑定的形式被绑定时，值会“流入”这个属性。
 *
 * 输出属性是一个带有 @Output 装饰器的可观察对象型的属性。
 * 这个属性几乎总是返回 Angular 的EventEmitter。
 * 当它通过事件绑定的形式被绑定时，值会“流出”这个属性。
 *
 * 你只能通过它的输入和输出属性将其绑定到其它组件。
 * 记住，所有的组件都是指令。
 *
 * 在下面的例子中，iconUrl 和 onSave 是组件的成员，它们在 = 右侧引号语法中被引用了。
 * <img [src]="iconUrl"/>
 * <button (click)="onSave()">Save</button>
 * iconUrl 和 onSave 是 AppComponent 类的成员。
 * 但它们并没有带 @Input() 或 @Output() 装饰器。 Angular 不在乎。
 * 你总是可以在组件自己的模板中绑定到组件的公共属性，而不用管它们是否输入（Input）属性或输出（Output）属性。
 * 这是因为组件类和模板是紧耦合的，它们是同一个东西的两个部分，合起来构成组件。
 * 组件类及其模板之间的交互属于实现细节。
 *
 * 绑定到其它组件
 * 你也可以绑定到其它组件的属性。 这种绑定形式下，其它组件的属性位于等号（=）的左侧。
 * 下面的例子中，AppComponent 的模板把 AppComponent 类的成员
 * 绑定到了 HeroDetailComponent（选择器为 'app-hero-detail'） 的属性上。
 * <app-hero-detail [hero]="currentHero" (deleteRequest)="deleteHero($event)"></app-hero-detail>
 *
 * Angular 编译器不会绑定到其它组件的属性上 —— 除非这些属性是输入或输出属性。
 * 组件绑定到它自己的属性当然没问题。 该组件的作者对这些绑定有完全的控制权。
 * 但是，其它组件不应该进行这种毫无限制的访问。
 * 如果任何人都可以绑定到你的组件的任何属性上，那么这个组件就很难维护。
 * 所以，外部组件应该只能绑定到组件的公共（允许绑定） API 上。
 * Angular 要求你显式声明那些 API。 它让你可以自己决定哪些属性是可以被外部组件绑定的。
 *
 * TypeScript 的 public 是没用的
 * 你不能用 TypeScript 的 public 和 private 访问控制符来标明组件的公共 API。
 * 所有数据绑定属性必须是 TypeScript 的公共属性，Angular 永远不会绑定到 TypeScript 中的私有属性。
 * 因此，Angular 需要一些其它方式来标记出那些允许被外部组件绑定到的属性。
 * 这种其它方式，就是 @Input() 和 @Output() 装饰器。
 *
 * 声明输入与输出属性
 * 在本章的例子中，绑定到 HeroDetailComponent 不会失败，这是因为这些要进行数据绑定的属性都带有 @Input() 和 @Output() 装饰器。
 *
 * 输入还是输出？
 * 输入属性通常接收数据值。
 * 输出属性暴露事件生产者，如 EventEmitter 对象。
 * 输入和输出这两个词是从目标指令的角度来说的。
 * 从 HeroDetailComponent 角度来看，HeroDetailComponent.hero 是个输入属性， 因为数据流从模板绑定表达式流入那个属性。
 * 从 HeroDetailComponent 角度来看，HeroDetailComponent.deleteRequest 是个输出属性， 因为事件从那个属性流出，流向模板绑定语句中的处理器。
 *
 * 给输入/输出属性起别名
 * 有时需要让输入/输出属性的公共名字不同于内部名字。
 * 这是使用 attribute 指令时的常见情况。
 * 指令的使用者期望绑定到指令名。
 * 例如，在 <div> 上用 myClick 选择器应用指令时， 希望绑定的事件属性也叫 myClick。
 * <div (myClick)="clickMessage=$event" clickable>click with myClick</div>
 *
 * 然而，在指令类中，直接用指令名作为自己的属性名通常都不是好的选择。
 * 指令名很少能描述这个属性是干嘛的。
 * myClick 这个指令名对于用来发出 click 消息的属性就算不上一个好名字。
 * 幸运的是，可以使用约定俗成的公共名字，同时在内部使用不同的名字。
 * 在上面例子中，实际上是把 myClick 这个别名指向了指令自己的 clicks 属性。
 * 把别名传进@Input/@Output 装饰器，就可以为属性指定别名，就像这样：
 * @Output('myClick') clicks = new EventEmitter<string>();
 *
 * 也可在 inputs 和 outputs 数组中为属性指定别名。
 * 可以写一个冒号 (:) 分隔的字符串，左侧是指令中的属性名，右侧则是公共别名。
 * @Directive({
 *  outputs: ['clicks:myClick']  // propertyName:alias
 * })
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hero: Hero = {id: 1, name: 'Tom'};

  onDeleteHero(hero: Hero): void {
    console.log(hero);
  }
}
