import {Component} from '@angular/core';

/**
 * 组件之间的交互
 *
 * 通过输入型绑定把数据从父组件传到子组件。
 * HeroChildComponent 有两个输入型属性，它们通常带@Input 装饰器。
 * 第二个 @Input 为子组件的属性名 masterName 指定一个别名 master(译者注：不推荐为起别名，请参见风格指南).
 * 父组件 HeroParentComponent 把子组件的 HeroChildComponent 放到 *ngFor 循环器中，
 * 把自己的 master 字符串属性绑定到子组件的 master 别名上，并把每个循环的 hero 实例绑定到子组件的 hero 属性。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
