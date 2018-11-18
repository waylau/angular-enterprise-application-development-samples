import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsDetailService {

  // 注入HttpClient
  constructor(private http: HttpClient) { }

  // 指定参数类型NewsMsg
  getNewsData(newsApiUrl: string) {
    newsApiUrl = 'http://mini.eastday.com//mobile//181118152309088.html';
    return this.http.get(newsApiUrl);
  }

}
