import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';  // Builder模式不需要
import { FormBuilder } from '@angular/forms';   // Builder模式需要
import { Validators } from '@angular/forms';  // 使用验证器

@Component({
  selector: 'app-nesting-form',
  templateUrl: './nesting-form.component.html',
  styleUrls: ['./nesting-form.component.css']
})
export class NestingFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { } // Builder模式需要

  ngOnInit() {
  }

  /*
  // 手工实例化表单
  nestingForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl('')
    })
  });
  */

  // 采用Builder模式来实例化表单
  nestingForm = this.fb.group({
    firstName: ['', Validators.required],  // 使用验证器
    lastName: [''],
    address: this.fb.group({
      city: [''],
      street: ['']
    }),
  });

  onSubmit() {
    console.warn(this.nestingForm.value);
  }

  updateProfile() {
    this.nestingForm.patchValue({
      firstName: '老卫',
      address: {
        street: '坂田华为基地'
      }
    });
  }
}
