import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AirQualityComponent } from './air-quality/air-quality.component';

@NgModule({
  declarations: [
    AppComponent,
    AirQualityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // 导入HttpClientModule模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
