import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatCardModule,
  MatTabsModule, MatDividerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate/navigate.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatTabsModule, // 用于导航栏
    MatCardModule, MatDividerModule,// 用于新闻列表

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
