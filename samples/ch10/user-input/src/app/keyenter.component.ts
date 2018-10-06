import { Component } from '@angular/core';

@Component({
  selector: 'app-key-enter',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})

export class KeyEnterComponent {
  value = '';
  onEnter(value: string) { 
    this.value = value; 
  }
}
