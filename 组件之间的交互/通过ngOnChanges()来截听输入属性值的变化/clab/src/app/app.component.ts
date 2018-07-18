import {Component} from '@angular/core';

/**
 * 组件之间的交互
 *
 * 通过ngOnChanges()来截听输入属性值的变化
 * 使用 OnChanges 生命周期钩子接口的 ngOnChanges() 方法来监测输入属性值的变化并做出回应。
 * 当需要监视多个、交互式输入属性的时候，本方法比用属性的 setter 更合适。
 * 这个 VersionChildComponent 会监测输入属性 major 和 minor 的变化，并把这些变化编写成日志以报告这些变化。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
