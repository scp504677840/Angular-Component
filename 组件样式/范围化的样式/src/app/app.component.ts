import {Component} from '@angular/core';

/**
 * 组件样式
 * Angular 应用使用标准的 CSS 来设置样式。
 * 这意味着你可以把关于 CSS 的那些知识和技能直接用于 Angular 程序中，例如：样式表、选择器、规则以及媒体查询等。
 * 另外，Angular 还能把组件样式捆绑在组件上，以实现比标准样式表更加模块化的设计。
 * 本章将会讲解如何加载和使用这些组件样式。
 *
 * 范围化的样式
 * 在 @Component 的元数据中指定的样式只会对该组件的模板生效。
 *
 * 它们既不会被模板中嵌入的组件继承，也不会被通过内容投影（如 ng-content）嵌进来的组件继承。
 *
 * 在这个例子中，h1 的样式只对 AppComponent 生效，
 * 既不会作用于内嵌的 Component ，
 * 也不会作用于应用中其它任何地方的 <h1> 标签。
 *
 * 这种范围限制就是所谓的样式模块化特性
 * - 可以使用对每个组件最有意义的 CSS 类名和选择器。
 * - 类名和选择器是仅属于组件内部的，它不会和应用中其它地方的类名和选择器出现冲突。
 * - 组件的样式不会因为别的地方修改了样式而被意外改变。
 * - 你可以让每个组件的 CSS 代码和它的 TypeScript、HTML 代码放在一起，这将促成清爽整洁的项目结构。
 * - 将来你可以修改或移除组件的 CSS 代码，而不用遍历整个应用来看它有没有被别处用到，只要看看当前组件就可以了。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
