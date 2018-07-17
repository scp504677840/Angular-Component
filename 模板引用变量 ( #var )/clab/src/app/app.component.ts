import {Component} from '@angular/core';
import {Hero} from './hero';

/**
 * 模板引用变量 ( #var )
 * 模板引用变量通常用来引用模板中的某个 DOM 元素，它还可以引用 Angular 组件或指令或Web Component。
 * 使用井号 (#) 来声明引用变量。 #phone 的意思就是声明一个名叫 phone 的变量来引用 <input> 元素。
 * <input #phone placeholder="phone number">
 * 你可以在模板中的任何地方引用模板引用变量。
 * 比如声明在 <input> 上的 phone 变量就是在模板另一侧的 <button> 上使用的。
 * <input #phone placeholder="phone number">
 *
 * <!-- lots of other elements -->
 *
 * <!-- phone refers to the input element; pass its `value` to an event handler -->
 * <button (click)="callPhone(phone.value)">Call</button>
 *
 * 模板引用变量怎么得到它的值？
 * 大多数情况下，Angular 会把模板引用变量的值设置为声明它的那个元素。
 * 在上一个例子中，phone 引用的是表示电话号码的 <input> 框。
 * "Call"按钮的点击事件处理器把这个 input 值传给了组件的 callPhone 方法。
 * 不过，指令也可以修改这种行为，让这个值引用到别处，比如它自身。
 * NgForm 指令就是这么做的。
 *
 * 下面是表单一章中表单范例的简化版。
 * <form (ngSubmit)="onSubmit(heroForm)" #heroForm="ngForm">
 *  <div class="form-group">
 *    <label for="name">Name
 *      <input class="form-control" name="name" required [(ngModel)]="hero.name">
 *    </label>
 *  </div>
 *  <button type="submit" [disabled]="!heroForm.form.valid">Submit</button>
 * </form>
 * <div [hidden]="!heroForm.form.valid">
 *  {{submitMessage}}
 * </div>
 *
 * 模板引用变量 heroForm 在这个例子中出现了三次，中间隔着一大堆 HTML。 heroForm 的值是什么？
 * 如果你没有导入过 FormsModule，Angular 就不会控制这个表单，那么它就是一个HTMLFormElement实例。
 * 这里的 heroForm 实际上是一个 Angular NgForm 指令的引用， 因此具备了跟踪表单中的每个控件的值和有效性的能力。
 * 原生的 <form> 元素没有 form 属性，但 NgForm 指令有。
 * 这就解释了为何当 heroForm.form.valid 是无效时你可以禁用提交按钮，
 * 并能把整个表单控件树传给父组件的 onSubmit 方法。
 *
 * 关于模板引用变量的注意事项
 * 模板引用变量 (#phone) 和*ngFor部分看到过的模板输入变量 (let phone) 是不同的。
 * 模板引用变量的作用范围是整个模板。 不要在同一个模板中多次定义同一个变量名，否则它在运行期间的值是无法确定的。
 * 你也可以用 ref- 前缀代替 #。 下面的例子中就用把 fax 变量声明成了 ref-fax 而不是 #fax。
 * <input ref-fax placeholder="fax number">
 * <button (click)="callFax(fax.value)">Fax</button>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  call(phone: string): void {
    console.log(phone);
  }
}
