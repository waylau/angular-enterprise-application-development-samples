import { Component, Input } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-user-main',
  template: `
    <app-quest-summary></app-quest-summary>
    <app-user-details [user]="user" [class.active]="user.active">
      <app-user-controls [user]="user"></app-user-controls>
    </app-user-details>
  `
})
export class UserAppMainComponent {
  @Input() user: User;
}
