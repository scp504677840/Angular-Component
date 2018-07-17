import {Component} from '@angular/core';

/**
 * attribute、class 和 style 绑定
 * 模板语法为那些不太适合使用属性绑定的场景提供了专门的单向数据绑定形式。
 *
 * 样式绑定
 * 通过样式绑定，可以设置内联样式。
 * 样式绑定的语法与属性绑定类似。
 * 但方括号中的部分不是元素的属性名，而由style前缀，一个点 (.)和 CSS 样式的属性名组成。
 * 形如：[style.style-property]。
 *
 * <button [style.color]="isSpecial ? 'red': 'green'">Red</button>
 * <button [style.background-color]="canSave ? 'cyan': 'grey'" >Save</button>
 * 有些样式绑定中的样式带有单位。在这里，以根据条件用 “em” 和 “%” 来设置字体大小的单位。
 * <button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
 * <button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>
 *
 * 虽然这是设置单一样式的好办法，但人们通常更喜欢使用 NgStyle 指令 来同时设置多个内联样式。
 * 注意，样式属性命名方法可以用中线命名法，像上面的一样 也可以用驼峰式命名法，如 fontSize。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isSpecial = false;

}
