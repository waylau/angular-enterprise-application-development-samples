import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-user-form-template></app-user-form-template>
             <hr>
             <app-user-form-reactive></app-user-form-reactive>`
})
export class AppComponent { }
