import {Component, Input} from '@angular/core';
import {trigger, state, style, animate, transition, keyframes, AnimationEvent} from '@angular/animations';

import { User } from './user.service';

@Component({
  selector: 'app-user-list-multistep',
  template: `
    <ul>
      <li *ngFor="let user of users"
          (@flyInOut.start)="animationStarted($event)"
          (@flyInOut.done)="animationDone($event)"
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
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class UserListMultistepComponent {
   @Input() users: User[];

  animationStarted(event: AnimationEvent) {
    console.warn('Animation started: ', event);
  }

  animationDone(event: AnimationEvent) {
    console.warn('Animation done: ', event);
  }
}
