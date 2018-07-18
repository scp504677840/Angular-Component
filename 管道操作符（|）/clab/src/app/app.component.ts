import {Component} from '@angular/core';
import {Hero} from './hero';

/**
 * 模板表达式操作符
 *
 * 模板表达式语言使用了 JavaScript 语法的子集，并补充了几个用于特定场景的特殊操作符。
 * 下面介绍其中的两个：管道和安全导航操作符。
 *
 * 管道操作符（|）
 *
 * 在绑定之前，表达式的结果可能需要一些转换。
 * 例如，可能希望把数字显示成金额、强制文本变成大写，或者过滤列表以及进行排序。
 *
 * Angular 管道对像这样的小型转换来说是个明智的选择。
 * 管道是一个简单的函数，它接受一个输入值，并返回转换结果。
 * 它们很容易用于模板表达式中，只要使用管道操作符 (|) 就行了。
 * <div>Title through uppercase pipe: {{title | uppercase}}</div>
 * 管道操作符会把它左侧的表达式结果传给它右侧的管道函数。
 * 还可以通过多个管道串联表达式：
 * <div>
 *     Title through a pipe chain:
 *     {{title | uppercase | lowercase}}
 * </div>
 * 还能对它们使用参数：
 * <div>Birthdate: {{currentHero?.birthdate | date:'longDate'}}</div>
 * json 管道对调试绑定特别有用：
 * <div>{{currentHero | json}}</div>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hero: Hero = {id: 1, name: 'Tom'};

}
