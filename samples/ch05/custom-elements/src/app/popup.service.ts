import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup.component';


@Injectable()
export class PopupService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}	  // 动态加载方法
  // 在将弹出窗口添加到DOM之前，需要设置基础结构
  showAsComponent(message: string) {
    // 创建元素
    const popup = document.createElement('popup-component');

    // 创建组件并包装成元素
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    this.applicationRef.attachView(popupComponentRef.hostView);

    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    popupComponentRef.instance.message = message;

    // 添加到DOM
    document.body.appendChild(popup);
  }

  // 自定义元素的方法
  showAsElement(message: string) {
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;

    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    popupEl.message = message;

    // 添加到DOM
    document.body.appendChild(popupEl);
  }
}