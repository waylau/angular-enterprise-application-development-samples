import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-team',
  template: `
    <link rel="stylesheet" href="../assets/user-team.component.css">
    <h3>Team</h3>
    <ul>
      <li *ngFor="let member of user.team">
        {{member}}
      </li>
    </ul>`
})
export class UserTeamComponent {
  @Input() user: User;
}
