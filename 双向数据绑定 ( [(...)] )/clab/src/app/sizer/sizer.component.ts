import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

/**
 * size 的初始值是一个输入值，来自属性绑定。（译注：注意 size 前面的 @Input）
 * 点击按钮，在最小/最大值范围限制内增加或者减少 size。 然后用调整后的 size 触发 sizeChange 事件。
 */
@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {

  @Input()
  size: number | string;

  @Output()
  sizeChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  dec(): void {
    this.resize(-1);
  }

  inc(): void {
    this.resize(+1);
  }

  resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
