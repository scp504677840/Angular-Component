import {Directive, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from './logger.service';

let nextId = 1;

/**
 * 指令也同样有生命周期钩子。SpyDirective 可以利用 ngOnInit 和 ngOnDestroy 钩子在它所监视的每个元素被创建或销毁时输出日志。
 * 本例把 SpyDirective 应用到父组件里的 ngFor英雄重复器(repeater)的 <div> 里面。
 *
 * OnDestroy()钩子
 * 一些清理逻辑必须在 Angular 销毁指令之前运行，把它们放在 ngOnDestroy() 中。
 * 这是在该组件消失之前，可用来通知应用程序中其它部分的最后一个时间点。
 * 这里是用来释放那些不会被垃圾收集器自动回收的各类资源的地方。
 * 取消那些对可观察对象和 DOM 事件的订阅。
 * 停止定时器。
 * 注销该指令曾注册到全局服务或应用级服务中的各种回调函数。
 * 如果不这么做，就会有导致内存泄露的风险。
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
