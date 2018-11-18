import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http'; // 导入HttpClient需要的模块

import {
  MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule,
  MatTabsModule, MatDividerModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate/navigate.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    NewsComponent,
    NewsDetailComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, // 用于搜索栏
    MatToolbarModule, MatTabsModule, // 用于导航栏
    MatCardModule, MatDividerModule,// 用于新闻列表
    HttpClientModule, // 导入HttpClient需要的模块
    HttpClientJsonpModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
