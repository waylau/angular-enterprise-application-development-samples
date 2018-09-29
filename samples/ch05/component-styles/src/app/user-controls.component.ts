import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-controls',
  template: `
    <style>
      button {
        background-color: white;
        border: 1px solid #777;
      }
    </style>
    <h3>Controls</h3>
    <button (click)="activate()">Activate</button>
  `
})
export class UserControlsComponent {
  @Input() user: User;

  activate() {
    this.user.active = true;
  }
}
