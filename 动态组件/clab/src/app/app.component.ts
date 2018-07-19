import {Component, OnInit} from '@angular/core';
import {AdItem} from './ad-item';
import {AdService} from './ad.service';

/**
 * 动态组件加载器
 *
 * 组件的模板不会永远是固定的。应用可能会需要在运行期间加载一些新的组件。
 * 展示如何使用 ComponentFactoryResolver 来动态添加组件。
 *
 * 动态组件加载
 * 下面的例子展示了如何构建动态广告条。
 *
 * 英雄管理局正在计划一个广告活动，要在广告条中显示一系列不同的广告。
 * 几个不同的小组可能会频繁加入新的广告组件。
 * 再用只支持静态组件结构的模板显然是不现实的。
 *
 * 你需要一种新的组件加载方式，它不需要在广告条组件的模板中引用固定的组件。
 *
 * Angular 自带的 API 就能支持动态加载组件。
 *
 * 指令
 * 在添加组件之前，先要定义一个锚点来告诉 Angular 要把组件插入到什么地方。
 * 广告条使用一个名叫 AdDirective 的辅助指令来在模板中标记出有效的插入点。
 * AdDirective 注入了 ViewContainerRef 来获取对容器视图的访问权，这个容器就是那些动态加入的组件的宿主。
 * 在 @Directive 装饰器中，要注意选择器的名称：appAd，它就是你将应用到元素上的指令。下一节会展示该如何做。
 *
 * 加载组件
 * 广告条的大部分实现代码都在 ad-banner.component.ts 中。
 * 为了让这个例子简单点，HTML 被直接放在了 @Component 装饰器的 template 属性中。
 * <ng-template> 元素就是刚才制作的指令将应用到的地方。
 * 要应用 AdDirective，回忆一下来自 ad.directive.ts 的选择器 appAd。
 * 把它应用到 <ng-template>（不用带方括号）。 这下，Angular 就知道该把组件动态加载到哪里了。
 * <ng-template> 元素是动态加载组件的最佳选择，因为它不会渲染任何额外的输出。
 *
 * 解析组件
 * 深入看看 ad-banner.component.ts 中的方法。
 * AdBannerComponent 接收一个 AdItem 对象的数组作为输入，
 * 它最终来自 AdService。
 * AdItem 对象指定要加载的组件类，以及绑定到该组件上的任意数据。
 * AdService 可以返回广告活动中的那些广告。
 * 给 AdBannerComponent 传入一个组件数组可以在模板中放入一个广告的动态列表，而不用写死在模板中。
 * 通过 getAds() 方法，AdBannerComponent 可以循环遍历 AdItems 的数组，并且每三秒调用一次 loadComponent() 来加载新组件。
 *
 * 在 loadComponent() 选取了一个广告之后，
 * 它使用 ComponentFactoryResolver 来为每个具体的组件解析出一个 ComponentFactory。
 * 然后 ComponentFactory 会为每一个组件创建一个实例。
 *
 * 接下来，你要把 viewContainerRef 指向这个组件的现有实例。
 * 但你怎么才能找到这个实例呢？
 * 很简单，因为它指向了 adHost，
 * 而这个 adHost 就是你以前设置过的指令，
 * 用来告诉 Angular 该把动态组件插入到什么位置。
 *
 * 回忆一下，AdDirective 曾在它的构造函数中注入了一个 ViewContainerRef。
 * 因此这个指令可以访问到这个你打算用作动态组件宿主的元素。
 * 要把这个组件添加到模板中，你可以调用 ViewContainerRef 的 createComponent()。
 * createComponent() 方法返回一个引用，指向这个刚刚加载的组件。
 * 使用这个引用就可以与该组件进行交互，比如设置它的属性或调用它的方法。
 *
 * 对选择器的引用
 * 通常，Angular 编译器会为模板中所引用的每个组件都生成一个 ComponentFactory 类。
 * 但是，对于动态加载的组件，模板中不会出现对它们的选择器的引用。
 * 要想确保编译器照常生成工厂类，就要把这些动态加载的组件添加到 NgModule 的 entryComponents 数组中：
 * entryComponents: [ HeroJobAdComponent, HeroProfileComponent ]
 *
 * 公共的 AdComponent 接口
 * 在广告条中，所有组件都实现了一个公共接口 AdComponent，它定义了一个标准化的 API，来把数据传给组件。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
