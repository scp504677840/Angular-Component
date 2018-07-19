import {Component, HostBinding} from '@angular/core';

/**
 * 组件样式
 * Angular 应用使用标准的 CSS 来设置样式。
 * 这意味着你可以把关于 CSS 的那些知识和技能直接用于 Angular 程序中，例如：样式表、选择器、规则以及媒体查询等。
 * 另外，Angular 还能把组件样式捆绑在组件上，以实现比标准样式表更加模块化的设计。
 * 本章将会讲解如何加载和使用这些组件样式。
 *
 * 把样式加载进组件中
 * 有几种方式把样式加入组件：
 * 1.设置 styles 或 styleUrls 元数据
 * 2.内联在模板的 HTML 中
 * 3.通过 CSS 文件导入
 *
 * 上述作用域规则对所有这些加载模式都适用。
 *
 * 元数据中的样式
 * 你可以给 @Component 装饰器添加一个 styles 数组型属性。
 * 这个数组中的每一个字符串（通常也只有一个）定义一份 CSS。
 * styles: ['h1 { font-weight: normal; }']
 * 注意：这些样式只对当前组件生效。 它们既不会作用于模板中嵌入的任何组件，也不会作用于投影进来的组件（如 ng-content ）。
 *
 * 当使用 --inline-styles 标识创建组件时，CLI 就会定义一个空的 styles 数组
 * ng generate component hero-app --inline-style
 *
 * 组件元数据中的样式文件
 * styleUrls: ['./app.component.css']
 * 注意：这些样式只对当前组件生效。 它们既不会作用于模板中嵌入的任何组件，也不会作用于投影进来的组件（如 ng-content ）。
 * 你可以指定多个样式文件，甚至可以组合使用 style 和 styleUrls 方式。
 *
 * 模板内联样式
 * 你也可以在组件的 HTML 模板中嵌入 <style> 标签。
 *
 * 模板中的 link 标签
 * 你也可以在组件的 HTML 模板中写 <link> 标签。
 * <link rel="stylesheet" href="../assets/sample.css">
 * link 标签的 href URL 必须是相对于本应用的根路径的，而不是相对于这个组件文件的。
 * 当使用 CLI 进行构建时，要确保这个链接到的样式表文件被复制到了服务器上。
 *
 * CSS @imports 语法
 * 你还可以利用标准的 CSS @import 规则来把其它 CSS 文件导入到 CSS 文件中。
 * 在这种情况下，URL 是相对于你正在导入的 CSS 文件的。
 * @import './hero-details-box.css';
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
