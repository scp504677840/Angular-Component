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
 * 内置结构型指令
 * 结构型指令的职责是 HTML 布局。
 * 它们塑造或重塑 DOM 的结构，这通常是通过添加、移除和操纵它们所附加到的宿主元素来实现的。
 * 常见结构型指令的简介：
 * NgIf - 根据条件把一个元素添加到 DOM 中或从 DOM 移除
 * NgSwitch 一组指令，用来在多个可选视图之间切换。
 * NgForOf - 对列表中的每个条目重复套用同一个模板
 *
 * NgIf
 * 通过把 NgIf 指令应用到元素上（称为宿主元素），你可以往 DOM 中添加或从 DOM 中移除这个元素。
 * 在下面的例子中，该指令绑定到了类似于 isActive 这样的条件表达式。
 * <app-hero-detail *ngIf="isActive"></app-hero-detail>
 * 当 isActive 表达式返回真值时，NgIf 把 HeroDetailComponent 添加到 DOM 中；
 * 为假时，NgIf 会从 DOM 中移除 HeroDetailComponent，并销毁该组件及其所有子组件。
 *
 * 这和显示/隐藏不是一回事
 * 你也可以通过类绑定或样式绑定来显示或隐藏一个元素。
 * <!-- isSpecial is true -->
 * <div [class.hidden]="!isSpecial">Show with class</div>
 * <div [class.hidden]="isSpecial">Hide with class</div>
 *
 * <!-- HeroDetail is in the DOM but hidden -->
 * <app-hero-detail [class.hidden]="isSpecial"></app-hero-detail>
 *
 * <div [style.display]="isSpecial ? 'block' : 'none'">Show with style</div>
 * <div [style.display]="isSpecial ? 'none'  : 'block'">Hide with style</div>
 * 但隐藏子树和用 NgIf 排除子树是截然不同的。
 * 当隐藏子树时，它仍然留在 DOM 中。
 * 子树中的组件及其状态仍然保留着。
 * 即使对于不可见属性，Angular 也会继续检查变更。
 * 子树可能占用相当可观的内存和运算资源。
 *
 * 当 NgIf 为 false 时，Angular 从 DOM 中物理地移除了这个元素子树。
 * 它销毁了子树中的组件及其状态，也潜在释放了可观的资源，最终让用户体验到更好的性能。
 *
 * 显示/隐藏的技术对于只有少量子元素的元素是很好用的，但要当心别试图隐藏大型组件树。
 * 相比之下，NgIf 则是个更安全的选择。
 *
 * 防范空指针错误
 * ngIf 指令通常会用来防范空指针错误。
 * 而显示/隐藏的方式是无法防范的，当一个表达式尝试访问空值的属性时，Angular 就会抛出一个异常。
 * 这里我们用 NgIf 来保护了两个 <div> 防范空指针错误。
 * currentHero 的名字只有当存在 currentHero 时才会显示出来。
 * 而 nullHero 永远不会显示。
 * <div *ngIf="currentHero">Hello, {{currentHero.name}}</div>
 * <div *ngIf="nullHero">Hello, {{nullHero.name}}</div>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isActive = true;
  hero = 'win';
}
