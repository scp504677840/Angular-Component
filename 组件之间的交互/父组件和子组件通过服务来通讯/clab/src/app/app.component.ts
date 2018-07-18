import {Component} from '@angular/core';

/**
 * 组件之间的交互
 *
 * 父组件和子组件通过服务来通讯
 * 父组件和它的子组件共享同一个服务，利用该服务在内部实现双向通讯。
 * 该服务实例的作用域被限制在父组件和其子组件内。
 * 这个组件子树之外的组件将无法访问该服务或者与它们通讯。
 * 这个 MissionService 把 MissionControlComponent 和多个 AstronautComponent 子组件连接起来。
 * MissionControlComponent 提供服务的实例，
 * 并将其共享给它的子组件(通过 providers 元数据数组)，
 * 子组件可以通过构造函数将该实例注入到自身。
 *
 * AstronautComponent 也通过自己的构造函数注入该服务。
 * 由于每个 AstronautComponent 都是 MissionControlComponent 的子组件，
 * 所以它们获取到的也是父组件的这个服务实例。
 *
 * 注意，这个例子保存了 subscription 变量，并在 AstronautComponent 被销毁时调用 unsubscribe() 退订。
 * 这是一个用于防止内存泄漏的保护措施。
 * 实际上，在这个应用程序中并没有这个风险，
 * 因为 AstronautComponent 的生命期和应用程序的生命期一样长。
 * 但在更复杂的应用程序环境中就不一定了。
 * 不需要在 MissionControlComponent 中添加这个保护措施，
 * 因为它作为父组件，控制着 MissionService 的生命期。
 *
 * History 日志证明了：在父组件 MissionControlComponent 和子组件 AstronautComponent 之间，信息通过该服务实现了双向传递。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
