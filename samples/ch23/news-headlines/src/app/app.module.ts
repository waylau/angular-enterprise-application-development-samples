import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // 导入HttpClient需要的模块

import {
  MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule,
  MatTabsModule, MatDividerModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavigateComponent } from './navigate/navigate.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavigateComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, // 用于搜索栏
    MatToolbarModule, MatTabsModule, // 用于导航栏
    MatCardModule, MatDividerModule,// 用于新闻列表
    HttpClientModule // 导入HttpClient需要的模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
