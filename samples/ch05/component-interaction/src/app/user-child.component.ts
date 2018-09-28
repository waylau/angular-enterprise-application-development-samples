import { Component, Input } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-user-child',
  template: `
    <p>{{user.name}} 的老师是 {{masterName}}.</p>
  `
})
export class UserChildComponent {
  @Input() user: User;
  @Input() masterName: string;
}
