import { Component, HostBinding } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <h1>用户列表</h1>
    <app-user-main [user]="user"></app-user-main>
  `,
  styles: ['h1 { font-weight: normal; }']
})
export class UserAppComponent {
  user = new User(
    'Human Torch',
    ['Mister Fantastic', 'Invisible Woman', 'Thing']
  );

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
}
