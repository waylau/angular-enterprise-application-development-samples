import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserAppComponent } from './user-app.component';
import { UserAppMainComponent } from './user-app-main.component';
import { UserDetailsComponent } from './user-details.component';
import { UserControlsComponent } from './user-controls.component';
import { QuestSummaryComponent } from './quest-summary.component';
import { UserTeamComponent } from './user-team.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    UserAppComponent,
    UserAppMainComponent,
    UserDetailsComponent,
    UserControlsComponent,
    QuestSummaryComponent,
    UserTeamComponent
  ],
  bootstrap: [ UserAppComponent ]
})
export class AppModule { }
