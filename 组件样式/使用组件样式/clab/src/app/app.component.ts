import {Component} from '@angular/core';

/**
 * 组件样式
 * Angular 应用使用标准的 CSS 来设置样式。
 * 这意味着你可以把关于 CSS 的那些知识和技能直接用于 Angular 程序中，例如：样式表、选择器、规则以及媒体查询等。
 * 另外，Angular 还能把组件样式捆绑在组件上，以实现比标准样式表更加模块化的设计。
 * 本章将会讲解如何加载和使用这些组件样式。
 *
 * 使用组件样式
 * 对你编写的每个 Angular 组件来说，除了定义 HTML 模板之外，
 * 还要定义用于模板的 CSS 样式、 指定任意的选择器、规则和媒体查询。
 * 实现方式之一，是在组件的元数据中设置 styles 属性。
 * styles 属性可以接受一个包含 CSS 代码的字符串数组。
 * 通常你只给它一个字符串就行了，如同下例：
 * @Component({
 * selector: 'app-root',
 * template: `
 * <h1>Tour of Heroes</h1>
 * <app-hero-main [hero]="hero"></app-hero-main>
 * `,
 * styles: ['h1 { font-weight: normal; }']
 * })
 * export class HeroAppComponent {
 *  //...
 * }
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
