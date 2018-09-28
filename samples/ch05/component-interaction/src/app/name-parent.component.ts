import { Component } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
  <h2>{{master}} 有 {{users.length}} 个学生</h2>
  <app-name-child *ngFor="let user of users"
    [name]="user">
  </app-name-child>
  `
})
export class NameParentComponent {
  // 显示 'Way Lau', '未设置名称', 'Bombasto', 'Magma'
  users = ['Way Lau', '   ', '  Bombasto  ', ' Magma'];

  master = '老卫';
}
