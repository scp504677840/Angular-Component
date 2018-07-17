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
 * 带 trackBy 的 *ngFor
 * ngFor 指令有时候会性能较差，特别是在大型列表中。
 * 对一个条目的一丁点改动、移除或添加，都会导致级联的 DOM 操作。
 *
 * 例如，重新从服务器查询可以刷新包括所有新英雄在内的英雄列表。
 * 他们中的绝大多数（如果不是所有的话）都是以前显示过的英雄。
 * 你知道这一点，是因为每个英雄的 id 没有变化。
 * 但在 Angular 看来，它只是一个由新的对象引用构成的新列表，
 * 它没有选择，只能清理旧列表、舍弃那些 DOM 元素，并且用新的 DOM 元素来重建一个新列表。
 *
 * 如果给它指定一个 trackBy，Angular 就可以避免这种折腾。
 * 往组件中添加一个方法，它会返回 NgFor应该追踪的值。
 * 在这里，这个值就是英雄的 id。
 * trackByHeroes(index: number, hero: Hero): number { return hero.id; }
 *
 * 在微语法中，把 trackBy 设置为该方法。
 * <div *ngFor="let hero of heroes; trackBy: trackByHeroes">
 *     ({{hero.id}}) {{hero.name}}
 * </div>
 *
 * 这里展示了 trackBy 的效果。
 * "Reset heroes"会创建一个具有相同 hero.id 的新英雄。
 * "Change ids"则会创建一个具有新 hero.id 的新英雄。
 *
 * - 如果没有 trackBy，这些按钮都会触发完全的 DOM 元素替换。
 * - 有了 trackBy，则只有修改了 id 的按钮才会触发元素替换。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = [
    new Hero(1, 'One'),
    new Hero(2, 'Two'),
    new Hero(3, 'Three')
  ];

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }
}
