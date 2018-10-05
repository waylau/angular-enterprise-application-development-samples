import {Component, Input} from '@angular/core';
import {trigger, state, style, animate, transition, group} from '@angular/animations';

import { User } from './user.service';

@Component({
  selector: 'app-user-list-groups',
  template: `
    <ul>
      <li *ngFor="let user of users"
          [@flyInOut]="'in'">
        {{user.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class UserListGroupsComponent {
   @Input() users: User[];
}
