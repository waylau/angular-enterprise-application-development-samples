import { BrowserModule,} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup.component';

import { PopupService } from './popup.service';

@NgModule({
  declarations: [
    AppComponent, PopupComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [PopupService],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
