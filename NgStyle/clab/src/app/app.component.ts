import {Component, OnInit} from '@angular/core';
import {setCurrentInjector} from '@angular/core/src/di/injector';

/**
 * 内置指令
 * 下面来看一下那些最常用的内置指令。它们可分为属性型指令 或 结构型指令。
 *
 * 内置属性型指令
 * 属性型指令会监听和修改其它 HTML 元素或组件的行为、元素属性（Attribute）、DOM 属性（Property）。
 * 它们通常会作为 HTML 属性的名称而应用在元素上。
 * 很多 Angular 模块，比如RouterModule和FormsModule都定义了自己的属性型指令。
 * 本节将会介绍几个最常用的属性型指令：
 * NgClass - 添加或移除一组 CSS 类
 * NgStyle - 添加或移除一组 CSS 样式
 * NgModel - 双向绑定到 HTML 表单元素
 *
 * NgStyle
 * 你可以根据组件的状态动态设置内联样式。
 * NgStyle 绑定可以同时设置多个内联样式。
 *
 * 样式绑定是设置单一样式值的简单方式。
 * <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'" >
 *     This div is x-large or smaller.
 * </div>
 * 如果要同时设置多个内联样式，NgStyle 指令可能是更好的选择。
 * NgStyle 需要绑定到一个 key:value 控制对象。 对象的每个 key 是样式名，它的 value 是能用于这个样式的任何值。
 * 来看看组件的 setCurrentStyles 方法，
 * 它会根据另外三个属性的状态把组件的 currentStyles 属性设置为一个定义了三个样式的对象：
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  canSave = true;
  isUnchanged = true;
  isSpecial = true;

  currentStyles: {};

  setCurrentStyles(): void {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    };
  }

  ngOnInit(): void {
    this.setCurrentStyles();
  }

}
