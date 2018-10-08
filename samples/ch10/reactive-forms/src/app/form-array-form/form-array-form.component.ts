import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array-form',
  templateUrl: './form-array-form.component.html',
  styleUrls: ['./form-array-form.component.css']
})
export class FormArrayFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { } 

  ngOnInit() {
  }

  formArrayForm = this.fb.group({
    aliases: this.fb.array([
      this.fb.control(''),
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.formArrayForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    console.warn(this.formArrayForm.value);
  }

}
