import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import {PopupComponent} from './popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  /**
   * 以前的动态加载方法需要您设置基础结构
   * 在将弹出窗口添加到DOM之前。
   *
   * @param message 消息
   */
  showAsComponent(message: string) {
    // 创建element
    const popup = document.createElement('popup-component');

    // 创建组件并使用元素将其连接起来
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(popup);
  }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(message: string) {
    // Create element
    const popupEl = document.createElement('popup-element');

    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    // Set the message
    popupEl.message = message;

    // Add to the DOM
    document.body.appendChild(popupEl);
  }
}
