import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form-template',
  templateUrl: './user-form-template.component.html',
  styleUrls: ['./user-form-template.component.css'],
})
export class UserFormTemplateComponent {

  jobs = ['工程师', '医生', '教师'];

  user = { name: '柳伟卫', age: 32, job: this.jobs[0] };

}
