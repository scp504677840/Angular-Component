import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class MissionService {

  // 可观察的字符串源
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // 可观察的字符串流
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  /**
   * 发布任务
   *
   * @param mission 任务
   */
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  /**
   * 完成任务
   *
   * @param astronaut 宇航员
   */
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}
