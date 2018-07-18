import {Component} from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styleUrls: ['./peek-a-boo-parent.component.css'],
  providers: [LoggerService]
})
export class PeekABooParentComponent {

  /**
   * 是否有自组件
   */
  hasChild = false;

  /**
   * 日志
   */
  hookLog: string[];

  /**
   * 英雄名称
   */
  heroName = 'Windstorm';

  /**
   * 日志服务
   */
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  /**
   * 创建或销毁子组件
   */
  toggleChild() {
    // 将hasChild取反
    this.hasChild = !this.hasChild;
    // 当hasChild为true时，也就是存在子组件时
    if (this.hasChild) {
      // 给英雄名称赋值
      this.heroName = 'Windstorm';
      // 清空日志
      this.logger.clear(); // clear log on create
    }
    // 将日志服务中的日志记录赋给本类中的日志记录
    this.hookLog = this.logger.logs;
    // 等上一个节拍，相当于handler
    this.logger.tick();
  }


  /**
   * 更新英雄
   */
  updateHero() {
    // 每次调用该方法时，将英雄名称后面追加一个感叹号
    this.heroName += '!';
    this.logger.tick();
  }

}
