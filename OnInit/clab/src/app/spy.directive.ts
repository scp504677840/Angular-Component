import {Directive, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from './logger.service';

let nextId = 1;

/**
 * 指令也同样有生命周期钩子。SpyDirective 可以利用 ngOnInit 和 ngOnDestroy 钩子在它所监视的每个元素被创建或销毁时输出日志。
 * 本例把 SpyDirective 应用到父组件里的 ngFor英雄重复器(repeater)的 <div> 里面。
 *
 * OnInit()钩子
 * 使用 ngOnInit() 有两个原因：
 * 1.在构造函数之后马上执行复杂的初始化逻辑
 * 2.在 Angular 设置完输入属性之后，对该组件进行准备。
 * 不要在组件的构造函数中获取数据？
 * 在测试环境下新建组件时或在你决定要显示它之前，不应该担心它会尝试联系远程服务器。
 * 构造函数中除了使用简单的值对局部变量进行初始化之外，什么都不应该做。
 *
 * ngOnInit() 是组件获取初始数据的好地方。
 * 另外还要记住，在指令的构造函数完成之前，那些被绑定的输入属性还都没有值。
 * 如果你需要基于这些属性的值来初始化这个指令，这种情况就会出问题。
 * 而当 ngOnInit() 执行的时候，这些属性都已经被正确的赋值过了。
 *
 * ngOnChanges() 方法是你访问这些属性的第一次机会，Angular 会在 ngOnInit() 之前调用它。
 * 但是在那之后，Angular 还会调用 ngOnChanges() 很多次。而 ngOnInit() 只会被调用一次。
 *
 * 你可以信任 Angular 会在创建组件后立刻调用 ngOnInit() 方法。
 * 这里是放置复杂初始化逻辑的好地方。
 */
@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) {
  }

  ngOnInit() {
    this.logIt(`onInit`);
  }

  ngOnDestroy() {
    this.logIt(`onDestroy`);
  }

  private logIt(msg: string) {
    this.logger.log(`Spy #${nextId++} ${msg}`);
  }
}
