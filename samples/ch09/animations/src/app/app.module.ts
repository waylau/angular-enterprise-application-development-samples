import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserTeamBuilderComponent } from './user-team-builder.component';
import { UserListBasicComponent } from './user-list-basic.component';
import { UserListEnterLeaveComponent } from './user-list-enter-leave.component';
import { UserListAutoComponent } from './user-list-auto.component';
import { UserListGroupsComponent } from './user-list-groups.component';
import { UserListMultistepComponent } from './user-list-multistep.component';
import { UserListTimingsComponent } from './user-list-timings.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule ],
  declarations: [
    UserTeamBuilderComponent,
    UserListBasicComponent,
    UserListEnterLeaveComponent,
    UserListAutoComponent,
    UserListTimingsComponent,
    UserListMultistepComponent,
    UserListGroupsComponent
  ],
  bootstrap: [ UserTeamBuilderComponent ]
})
export class AppModule { }

