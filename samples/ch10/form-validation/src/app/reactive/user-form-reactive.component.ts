import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';

@Component({
  selector: 'app-user-form-reactive',
  templateUrl: './user-form-reactive.component.html',
  styleUrls: ['./user-form-reactive.component.css'],
})
export class UserFormReactiveComponent implements OnInit {

  jobs = ['工程师', '医生', '教师'];

  user = { name: '柳伟卫', age: 32, job: this.jobs[0] };

  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'name': new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(2),
        forbiddenNameValidator(/老卫/i)
      ]),
      'age': new FormControl(this.user.age),
      'job': new FormControl(this.user.job, Validators.required)
    },  { validators: identityRevealedValidator }); // <-- add custom validator at the FormGroup level
  }

  get name() { return this.userForm.get('name'); }

  get job() { return this.userForm.get('job'); }
}
