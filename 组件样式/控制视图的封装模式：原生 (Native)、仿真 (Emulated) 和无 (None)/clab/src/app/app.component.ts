import {Component, HostBinding} from '@angular/core';

/**
 * 组件样式
 * Angular 应用使用标准的 CSS 来设置样式。
 * 这意味着你可以把关于 CSS 的那些知识和技能直接用于 Angular 程序中，例如：样式表、选择器、规则以及媒体查询等。
 * 另外，Angular 还能把组件样式捆绑在组件上，以实现比标准样式表更加模块化的设计。
 * 本章将会讲解如何加载和使用这些组件样式。
 *
 * 控制视图的封装模式：原生 (Native)、仿真 (Emulated) 和无 (None)
 * 像上面讨论过的一样，组件的 CSS 样式被封装进了自己的视图中，而不会影响到应用程序的其它部分。
 * 通过在组件的元数据上设置视图封装模式，你可以分别控制每个组件的封装模式。 可选的封装模式一共有如下几种：
 * 1.Native 模式使用浏览器原生的 Shadow DOM 实现来为组件的宿主元素附加一个 Shadow DOM。
 * 组件的样式被包裹在这个 Shadow DOM 中。(译注：不进不出，没有样式能进来，组件样式出不去。)
 * 2.Emulated 模式（默认值）通过预处理（并改名）CSS 代码来模拟 Shadow DOM 的行为，
 * 以达到把 CSS 样式局限在组件视图中的目的。
 * 3.None 意味着 Angular 不使用视图封装。
 * Angular 会把 CSS 添加到全局样式中。
 * 而不会应用上前面讨论过的那些作用域规则、隔离和保护等。
 * 从本质上来说，这跟把组件的样式直接放进 HTML 是一样的。(译注：能进能出。)
 *
 * 通过组件元数据中的 encapsulation 属性来设置组件封装模式：
 * encapsulation: ViewEncapsulation.Native
 *
 * 原生(Native)模式只适用于有原生 Shadow DOM 支持的浏览器。
 * 因此仍然受到很多限制，这就是为什么仿真 (Emulated) 模式是默认选项，并建议将其用于大多数情况。
 *
 * 查看仿真 (Emulated) 模式下生成的 CSS
 * 当使用默认的仿真模式时，Angular 会对组件的所有样式进行预处理，让它们模仿出标准的 Shadow CSS 作用域规则。
 * 在启用了仿真模式的 Angular 应用的 DOM 树中，每个 DOM 元素都被加上了一些额外的属性。
 * <hero-details _nghost-pmm-5>
 *     <h2 _ngcontent-pmm-5>Mister Fantastic</h2>
 *     <hero-team _ngcontent-pmm-5 _nghost-pmm-6>
 *         <h3 _ngcontent-pmm-6>Team</h3>
 *     </hero-team>
 * </hero-detail>
 * 生成出的属性分为两种：
 * 1.一个元素在原生封装方式下可能是 Shadow DOM 的宿主，在这里被自动添加上一个 _nghost 属性。 这是组件宿主元素的典型情况。
 * 2.组件视图中的每一个元素，都有一个 _ngcontent 属性，它会标记出该元素是哪个宿主的模拟 Shadow DOM。
 *
 * 这些属性的具体值并不重要。
 * 它们是自动生成的，并且你永远不会在程序代码中直接引用到它们。
 * 但它们会作为生成的组件样式的目标，就像 DOM 的 <head> 中一样：
 * [_nghost-pmm-5] {
 *    display: block;
 *    border: 1px solid black;
 * }
 *
 * h3[_ngcontent-pmm-6] {
 *    background-color: white;
 *    border: 1px solid #777;
 * }
 * 这些就是那些样式被处理后的结果，
 * 每个选择器都被增加了 _nghost 或 _ngcontent 属性选择器。
 * 这些额外的选择器实现了本文所描述的这些作用域规则。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }

}
