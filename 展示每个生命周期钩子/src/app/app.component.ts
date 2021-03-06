import {Component} from '@angular/core';

/**
 * 生命周期钩子
 *
 * 每个组件都有一个被 Angular 管理的生命周期。
 * Angular 创建它，渲染它，创建并渲染它的子组件，在它被绑定的属性发生变化时检查它，并在它从 DOM 中被移除前销毁它。
 * Angular 提供了生命周期钩子，把这些关键生命时刻暴露出来，赋予你在它们发生时采取行动的能力。
 * 除了那些组件内容和视图相关的钩子外,指令有相同生命周期钩子。
 *
 * 组件生命周期钩子概览
 * 指令和组件的实例有一个生命周期：新建、更新和销毁。
 * 通过实现一个或多个 Angular core 库里定义的生命周期钩子接口，开发者可以介入该生命周期中的这些关键时刻。
 * 每个接口都有唯一的一个钩子方法，它们的名字是由接口名再加上 ng 前缀构成的。
 * 比如，OnInit 接口的钩子方法叫做 ngOnInit， Angular 在创建组件后立刻调用它，：
 * ngOnInit() { this.logIt(`OnInit`); }
 * 没有指令或者组件会实现所有这些接口，并且有些钩子只对组件有意义。
 * 只有在指令/组件中定义过的那些钩子方法才会被 Angular 调用。
 *
 * 生命周期的顺序
 * 当 Angular 使用构造函数新建一个组件或指令后，就会按下面的顺序在特定时刻调用这些生命周期钩子方法：
 * ngOnChanges()
 * 当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象
 * 当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在 ngOnInit() 之前。
 *
 * ngOnInit()
 * 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
 * 在第一轮 ngOnChanges() 完成之后调用，只调用一次。
 *
 * ngDoCheck()
 * 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。
 * 在每个 Angular 变更检测周期中调用，ngOnChanges() 和 ngOnInit() 之后。
 *
 * ngAfterContentInit()
 * 当把内容投影进组件之后调用。
 * 第一次 ngDoCheck() 之后调用，只调用一次。
 *
 * ngAfterContentChecked()
 * 每次完成被投影组件内容的变更检测之后调用。
 * ngAfterContentInit() 和每次 ngDoCheck() 之后调用
 *
 * ngAfterViewInit()
 * 初始化完组件视图及其子视图之后调用。
 * 第一次 ngAfterContentChecked() 之后调用，只调用一次。
 *
 * ngAfterViewChecked()
 * 每次做完组件视图和子视图的变更检测之后调用。
 * ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用。
 *
 * ngOnDestroy()
 * 当 Angular 每次销毁指令/组件之前调用并清扫。
 * 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。
 * 在 Angular 销毁指令/组件之前调用。
 *
 * 接口是可选的（严格来说）
 * 从纯技术的角度讲，接口对 JavaScript 和 TypeScript 的开发者都是可选的。
 * JavaScript 语言本身没有接口。
 * Angular 在运行时看不到 TypeScript 接口，因为它们在编译为 JavaScript 的时候已经消失了。
 *
 * 幸运的是，它们并不是必须的。 你并不需要在指令和组件上添加生命周期钩子接口就能获得钩子带来的好处。
 *
 * Angular 会去检测这些指令和组件的类，一旦发现钩子方法被定义了，就调用它们。
 * Angular 会找到并调用像 ngOnInit() 这样的钩子方法，有没有接口无所谓。
 *
 * 虽然如此，在 TypeScript 指令类中添加接口是一项最佳实践，它可以获得强类型和 IDE 等编辑器带来的好处。
 *
 * 其它生命周期钩子
 * Angular 的其它子系统除了有这些组件钩子外，还可能有它们自己的生命周期钩子。
 * 第三方库也可能会实现它们自己的钩子，以便让这些开发者在使用时能做更多的控制。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
