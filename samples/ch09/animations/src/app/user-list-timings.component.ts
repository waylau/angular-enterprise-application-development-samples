import {Component, Input} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

import { User } from './user.service';

@Component({
  selector: 'app-user-list-timings',
  template: `
    <ul>
      <li *ngFor="let user of users"
          [@flyInOut]="'in'"
          (click)="user.toggleState()">
         {{user.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.8s ease-in')
      ]),
      transition('* => void', [
        animate('0.8s 0.5s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class UserListTimingsComponent {
   @Input() users: User[];
}
