import {Directive, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from './logger.service';

let nextId = 1;

/**
 * 指令也同样有生命周期钩子。SpyDirective 可以利用 ngOnInit 和 ngOnDestroy 钩子在它所监视的每个元素被创建或销毁时输出日志。
 * 本例把 SpyDirective 应用到父组件里的 ngFor英雄重复器(repeater)的 <div> 里面。
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
