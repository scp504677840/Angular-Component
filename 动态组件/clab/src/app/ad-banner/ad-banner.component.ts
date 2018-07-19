import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from '../ad.directive';
import {AdItem} from '../ad-item';
import {AdComponent} from '../ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {

  /**
   * 广告组
   */
  @Input() ads: AdItem[];

  /**
   * 轮询索引
   */
  currentAdIndex = -1;

  /**
   * Ad指令
   */
  @ViewChild(AdDirective) adHost: AdDirective;

  /**
   * 定时任务
   */
  interval: any;

  /**
   * 构造函数
   *
   * @param componentFactoryResolver 组件工厂解析器
   */
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  /**
   * 加载组件
   */
  loadComponent() {
    // 得到当前广告索引
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    // 根据索引获取当前广告
    let adItem = this.ads[this.currentAdIndex];

    // 根据component获取componentFactory
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    // 获取视图容器引用
    let viewContainerRef = this.adHost.viewContainerRef;
    // 清空容器
    viewContainerRef.clear();

    // 根据componentFactory创建组件，得到组件的引用
    let componentRef = viewContainerRef.createComponent(componentFactory);
    // 设置组件的数据
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
