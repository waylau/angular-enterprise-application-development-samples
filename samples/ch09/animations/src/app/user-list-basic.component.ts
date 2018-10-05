import {Component, Input} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

import { User } from './user.service';

@Component({
  selector: 'app-user-list-basic',
  template: `
    <ul>
      <li *ngFor="let user of users"
          [@userState]="user.state"
          (click)="user.toggleState()">
        {{user.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('userState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class UserListBasicComponent {
  @Input() users: User[];
}
