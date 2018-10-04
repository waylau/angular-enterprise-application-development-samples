import { Component } from '@angular/core';

@Component({
  selector: 'app-user-birthday',
  template: `<p>用户的生日是{{ birthday | date }}</p>
             <p>用户的生日是{{ birthday | date:"yyyy/MM/dd" }}</p>
             `
})
export class UserBirthdayComponent {
  birthday = new Date(1987, 0, 17); // 1987年1月17日
}
