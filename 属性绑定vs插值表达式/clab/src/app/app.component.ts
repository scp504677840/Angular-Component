import {Component} from '@angular/core';

/**
 * 属性绑定还是插值表达式？
 * 你通常得在插值表达式和属性绑定之间做出选择。
 * 下列这几对绑定做的事情完全相同：
 *
 * <p><img src="{{heroImageUrl}}"> is the <i>interpolated</i> image.</p>
 * <p><img [src]="heroImageUrl"> is the <i>property bound</i> image.</p>
 *
 * <p><span>"{{title}}" is the <i>interpolated</i> title.</span></p>
 * <p>"<span [innerHTML]="title"></span>" is the <i>property bound</i> title.</p>
 *
 * 在多数情况下，插值表达式是更方便的备选项。
 * 实际上，在渲染视图之前，Angular 把这些插值表达式翻译成相应的属性绑定。
 *
 * 当要渲染的数据类型是字符串时，没有技术上的理由证明哪种形式更好。
 * 你倾向于可读性，所以倾向于插值表达式。
 * 建议建立代码风格规则，选择一种形式，
 * 这样，既遵循了规则，又能让手头的任务做起来更自然。
 * 但数据类型不是字符串时，就必须使用属性绑定了。
 *
 * 内容安全
 * 假设下面的恶意内容
 * evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
 * 幸运的是，Angular 数据绑定对危险 HTML 有防备。
 * 在显示它们之前，它对内容先进行消毒。
 * 不管是插值表达式还是属性绑定，都不会允许带有 script 标签的 HTML 泄漏到浏览器中。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
}
