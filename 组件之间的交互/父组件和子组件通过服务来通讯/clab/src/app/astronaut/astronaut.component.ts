import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MissionService} from '../mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnDestroy {

  /**
   * 宇航员
   */
  @Input() astronaut: string;

  /**
   * 任务
   */
  mission = '<no mission announced>';

  /**
   * 任务是否完成
   */
  confirmed = false;

  /**
   * 是否有已经发布的任务
   */
  announced = false;

  /**
   * 订阅
   */
  subscription: Subscription;

  /**
   * 构造函数
   *
   * @param missionService 任务服务
   */
  constructor(private missionService: MissionService) {
    // 订阅任务数据流
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        // 记录任务
        this.mission = mission;
        // 任务已发布
        this.announced = true;
        // 任务未完成
        this.confirmed = false;
      });
  }

  /**
   * 完成任务
   */
  confirm() {
    // 已经完成任务
    this.confirmed = true;
    // 任务服务发布完成任务的消息
    this.missionService.confirmMission(this.astronaut);
  }

  /**
   * 组件销毁时调用
   */
  ngOnDestroy() {
    // 防止内存泄漏
    // 反订阅
    this.subscription.unsubscribe();
  }
}
