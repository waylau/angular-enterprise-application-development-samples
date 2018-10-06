import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
    <button (click)="onClickMe()">点击我</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = '欢迎参加Angular的学习！';
  }
}
