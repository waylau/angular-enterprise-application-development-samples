import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = new FormControl(''); // 实例化

  updateName() {
    this.name.setValue('老卫');
  }
}
