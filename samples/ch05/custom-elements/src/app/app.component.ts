import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';

@Component({
  selector: 'app-root',
  template: `
    <input #input value="Message">
    <button (click)="popup.showAsComponent(input.value)">Show as component</button>
    <button (click)="popup.showAsElement(input.value)">Show as element</button>
  `,
})
export class AppComponent {
  constructor(injector: Injector, public popup: PopupService) {
    // `PopupComponent`转为自定义元素
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // 注册自定义元素到浏览器
    customElements.define('popup-element', PopupElement);
  }
}