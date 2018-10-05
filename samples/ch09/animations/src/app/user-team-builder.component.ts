import { Component } from '@angular/core';

import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="buttons">
      <button [disabled]="!userService.canAdd()" (click)="userService.addInactive()">Add inactive user</button>
      <button [disabled]="!userService.canAdd()" (click)="userService.addActive()">Add active user</button>
      <button [disabled]="!userService.canRemove()" (click)="userService.remove()">Remove user</button>
    </div>

    <h1>动画示例</h1>

    <hr>
    <h2>基本状态切换</h2>
    <app-user-list-basic [users]="users"></app-user-list-basic>

    <hr>
    <h2>进场与离场</h2>
    <app-user-list-enter-leave [users]="users"></app-user-list-enter-leave>
    <button [disabled]="!userService.canRemove()" (click)="userService.remove()">移除</button>

    <hr>
    <h2>自动属性值计算</h2>
    <app-user-list-auto [users]="users"></app-user-list-auto>
    <button [disabled]="!userService.canRemove()" (click)="userService.remove()">移除</button>

    <hr>
    <h2>动画时间线</h2>
    <app-user-list-timings [users]="users"></app-user-list-timings>
    <button [disabled]="!userService.canRemove()" (click)="userService.remove()">移除</button>

    <hr>
    <h2>基于关键帧的多阶段动画</h2>
    <app-user-list-multistep [users]="users"></app-user-list-multistep>
    <button [disabled]="!userService.canRemove()" (click)="userService.remove()">移除</button>
    
    <hr>
    <h2>并行动画组</h2>
    <app-user-list-groups [users]="users"></app-user-list-groups>
    <button [disabled]="!userService.canRemove()" (click)="userService.remove()">移除</button>

  `,
  providers: [UserService]
})
export class UserTeamBuilderComponent {
  users: User[];

  constructor(private userService: UserService) {
    this.users = userService.getAllUsers();
  }
}
