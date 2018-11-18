import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsDetailService {

  // 注入HttpClient
  constructor(private http: HttpClient) { }

  // 指定参数类型NewsMsg
  getNewsData(newsApiUrl: string) {
    return this.http.get(newsApiUrl,
      { responseType: 'text' }   // 处理HTML的类型
    );
  }

}
