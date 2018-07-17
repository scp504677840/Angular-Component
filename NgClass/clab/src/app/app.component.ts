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
 * NgClass
 * 你经常用动态添加或删除 CSS 类的方式来控制元素如何显示。 通过绑定到 NgClass，可以同时添加或移除多个类。
 * CSS 类绑定 是添加或删除单个类的最佳途径。
 * <div [class.special]="isSpecial">The class binding is special</div>
 *
 * 当想要同时添加或移除多个 CSS 类时，NgClass 指令可能是更好的选择。
 * 试试把 ngClass 绑定到一个 key:value 形式的控制对象。
 * 这个对象中的每个 key 都是一个 CSS 类名，如果它的 value 是 true，这个类就会被加上，否则就会被移除。
 *
 * 组件方法 setCurrentClasses 可以把组件的属性 currentClasses 设置为一个对象，
 * 它将会根据三个其它组件的状态为 true 或 false 而添加或移除三个类。
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

  currentClasses: {};

  setCurrentClasses(): void {
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': this.isSpecial
    };
  }

  ngOnInit(): void {
    this.setCurrentClasses();
  }

}
