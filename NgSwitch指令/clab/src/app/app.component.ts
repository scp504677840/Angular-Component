import {Component} from '@angular/core';
import {Hero} from './hero';

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
 * NgSwitch 指令
 * NgSwitch 指令类似于 JavaScript 的 switch 语句。
 * 它可以从多个可能的元素中根据switch 条件来显示某一个。
 * Angular 只会把选中的元素放进 DOM 中。
 *
 * NgSwitch 实际上包括三个相互协作的指令：NgSwitch、NgSwitchCase 和 NgSwitchDefault，例子如下：
 * <div [ngSwitch]="currentHero.emotion">
 *     <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
 *     <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
 *     <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
 *     <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
 * </div>
 *
 * NgSwitch 是主控指令，要把它绑定到一个返回候选值的表达式。
 * 本例子中的 emotion 是个字符串，但实际上这个候选值可以是任意类型。
 *
 * 绑定到 [ngSwitch]。
 * 如果试图用 *ngSwitch 的形式使用它就会报错，这是因为 NgSwitch 是一个属性型指令，而不是结构型指令。
 * 它要修改的是所在元素的行为，而不会直接接触 DOM 结构。
 *
 * 绑定到 *ngSwitchCase 和 *ngSwitchDefault NgSwitchCase 和 NgSwitchDefault 指令都是结构型指令，
 * 因为它们会从 DOM 中添加或移除元素。
 *
 * - NgSwitchCase 会在它绑定到的值等于候选值时，把它所在的元素加入到 DOM 中。
 * - NgSwitchDefault 会在没有任何一个 NgSwitchCase 被选中时把它所在的元素加入 DOM 中。
 *
 * 这组指令在要添加或移除组件元素时会非常有用。
 * 这个例子会在 hero-switch.components.ts 中定义的四个“感人英雄”组件之间选择。
 * 每个组件都有一个输入属性hero，它绑定到父组件的 currentHero 上。
 *
 * 这组指令在原生元素和Web Component上都可以正常工作。 比如，你可以把 <confused-hero> 分支改成这样：
 * <div *ngSwitchCase="'confused'">Are you as confused as {{currentHero.name}}?</div>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hero: Hero = {id: 1, name: 'One', emotion: 'happy'};
}
