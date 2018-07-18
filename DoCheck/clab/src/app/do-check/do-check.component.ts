import {Component, DoCheck, Input} from '@angular/core';
import {Hero} from '../hero';

/**
 * 实现了一个 ngDoCheck() 方法，通过它可以自定义变更检测逻辑。
 * 这里将会看到：Angular 会用什么频度调用这个钩子，监视它的变化，并把这些变化输出成一条日志。
 *
 * 使用 DoCheck 钩子来检测那些 Angular 自身无法捕获的变更并采取行动。
 * 用这个方法来检测那些被 Angular 忽略的更改。
 *
 * 虽然 ngDoCheck() 钩子可以可以监测到英雄的 name 什么时候发生了变化。
 * 但其开销很恐怖。
 * 这个 ngDoCheck 钩子被非常频繁的调用 —— 在每次变更检测周期之后，发生了变化的每个地方都会调它。
 * 在这个例子中，用户还没有做任何操作之前，它就被调用了超过二十次。
 *
 * 大部分检查的第一次调用都是在 Angular 首次渲染该页面中其它不相关数据时触发的。
 * 仅仅把鼠标移到其它 <input> 中就会触发一次调用。
 * 只有相对较少的调用才是由于对相关数据的修改而触发的。
 * 显然，我们的实现必须非常轻量级，否则将损害用户体验。
 */
@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css']
})
export class DoCheckComponent implements DoCheck {

  /**
   * 英雄
   */
  @Input() hero: Hero;

  /**
   * 能力
   */
  @Input() power: string;

  changeDetected = false;
  changeLog: string[] = [];
  oldHeroName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;

  ngDoCheck() {

    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      // log that hook was called when there was no relevant change.
      const count = this.noChangeCount += 1;
      const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      if (count === 1) {
        // add new "no change" message
        this.changeLog.push(noChangeMsg);
      } else {
        // update last "no change" message
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;
  }

  /**
   * 重置，父视图持有子视图对象，也会调用此方法。
   */
  reset() {
    this.changeDetected = true;
    this.changeLog = [];
  }
}
