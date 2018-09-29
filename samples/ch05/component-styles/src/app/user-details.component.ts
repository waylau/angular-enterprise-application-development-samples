import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-details',
  template: `
    <h2>{{user.name}}</h2>
    <app-user-team [user]=user></app-user-team>
    <ng-content></ng-content>
  `,
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() user: User;
}
