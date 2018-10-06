import { Component, OnInit } from '@angular/core';

import { User }    from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  jobs = ['工程师', '医生', '教师'];

  model = new User(1, '柳伟卫', this.jobs[0], 32);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO：后期可以删除
  get diagnostic() { return JSON.stringify(this.model); }

  newUser() {
    this.model = new User(1, '', '');
  }
}
