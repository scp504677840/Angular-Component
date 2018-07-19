import {Component} from '@angular/core';
import {MissionService} from '../mission.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css'],
  providers: [MissionService]
})
export class MissionControlComponent {

  /**
   * 宇航员
   */
  astronauts = ['Lovell', 'Swigert', 'Haise'];

  /**
   * 历史记录
   */
  history: string[] = [];

  /**
   * 任务
   */
  missions = ['Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];

  /**
   * 下一个任务索引
   */
  nextMission = 0;

  /**
   * 构造函数
   *
   * @param missionService 任务服务
   */
  constructor(private missionService: MissionService) {
    // 订阅任务完成时的宇航员数据流
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  /**
   * 发布任务
   */
  announce() {
    // 从任务列表中取一个任务
    let mission = this.missions[this.nextMission++];
    // 发布任务
    this.missionService.announceMission(mission);
    // 记录发布的任务
    this.history.push(`Mission "${mission}" announced`);
    // 当索引大于或等于列表长度时
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
