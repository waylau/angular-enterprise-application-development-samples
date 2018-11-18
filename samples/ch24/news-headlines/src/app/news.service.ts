import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core'; // 通过事件方式与实现组件间通信
import { HttpClient } from '@angular/common/http';

import { NewsMsg } from './news'; // 导入新闻列表的包装类型

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // 新闻列表API地址
  newsApiUrl = 'http://v.juhe.cn/toutiao/index?type='
  alias = 'top';  // 默认值top，获取全部的新闻数据
  key = '&key=d95eb2c02b12e841bafb5a49d20924be';

  // 通过事件方式与实现组件间通信
  tabSelected = new EventEmitter<string>();

  // 注入HttpClient
  constructor(private http: HttpClient) { }

  // 指定参数类型NewsMsg
  getNewsData() {
    return this.http.get<NewsMsg>(this.newsApiUrl + this.alias + this.key);
  }

  // 设置新闻分类，用于刷新新闻数据
  setAlias(alias: string) {
    this.alias = alias;
  }

}
