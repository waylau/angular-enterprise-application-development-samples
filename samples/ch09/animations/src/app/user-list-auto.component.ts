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
  selector: 'app-user-list-auto',
  template: `
    <ul>
      <li *ngFor="let user of users"
          [@shrinkOut]="'in'">
        {{user.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class UserListAutoComponent {
   @Input() users: User[];
}
