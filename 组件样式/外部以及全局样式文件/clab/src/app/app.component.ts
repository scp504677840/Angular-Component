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
 *
 * 外部以及全局样式文件
 * 当使用 CLI 进行构建时，你必须配置 angular.json 文件，使其包含所有外部资源（包括外部的样式表文件）。
 * 在它的 styles 区注册这些全局样式文件，默认情况下，它会有一个预先配置的全局 styles.css 文件。
 *
 * 非 CSS 样式文件
 * 如果使用 CLI 进行构建，那么你可以用 sass、less 或 stylus 来编写样式，
 * 并使用相应的扩展名（.scss、.less、.styl）把它们指定到 @Component.styleUrls 元数据中。例子如下：
 * styleUrls: ['./app.component.scss']
 * CLI 的构建过程会运行相关的预处理器。
 * 当使用 ng generate component 命令生成组件文件时，
 * CLI 会默认生成一个空白的 CSS 样式文件（.css）。
 * 你可以配置 CLI，让它默认使用你喜欢的 CSS 预处理器，参见 CLI 官方文档 中的解释。
 *
 * 添加到 @Component.styles 数组中的字符串必须写成 CSS，因为 CLI 没法对这些内联的样式使用任何 CSS 预处理器。
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
