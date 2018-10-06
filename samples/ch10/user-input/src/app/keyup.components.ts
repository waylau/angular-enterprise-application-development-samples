import { Component } from '@angular/core';

@Component({
  selector: 'app-key-up',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent {
  values = '';

  onKey(event: KeyboardEvent) { // 指定事件类型
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}