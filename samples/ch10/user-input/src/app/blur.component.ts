import { Component } from '@angular/core';

@Component({
  selector: 'app-blur',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)"
      (blur)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})

export class BlurComponent {
  value = '';
  onEnter(value: string) { 
    this.value = value; 
  }
}
