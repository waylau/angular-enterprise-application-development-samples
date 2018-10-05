import {
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { User } from './user.service';

@Component({
  selector: 'app-user-list-enter-leave',
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
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class UserListEnterLeaveComponent {
   @Input() users: User[];
}
