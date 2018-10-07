import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }           from './app.component';
import { UserFormTemplateComponent } from './template/user-form-template.component';
import { UserFormReactiveComponent } from './reactive/user-form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    UserFormTemplateComponent,
    UserFormReactiveComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
