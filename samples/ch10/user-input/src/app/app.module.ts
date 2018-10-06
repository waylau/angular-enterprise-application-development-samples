import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlurComponent } from './blur.component'
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.components';
import { KeyEnterComponent } from './keyenter.component';
import { LoopbackComponent } from './loop-back.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BlurComponent,
    ClickMeComponent,
    KeyUpComponent,
    KeyEnterComponent,
    LoopbackComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
