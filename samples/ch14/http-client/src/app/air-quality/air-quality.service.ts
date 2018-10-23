import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

import { AirQuality } from './air-quality';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {

  // 空气质量数据资源地址
  airQualityUrl = 'http://api.waqi.info/feed/guangzhou/?token=0e609829c81121cc05daf37b45d62b82725cd521';

  // 注入HttpClient
  constructor(private http: HttpClient) { }

  // 没有指定参数类型
  /*
  getAirData() {
    return this.http.get(this.airQualityUrl);
  }
  */
  // 指定参数类型AirQuality
  /*
  getAirData() {
    return this.http.get<AirQuality>(this.airQualityUrl);
  }
  */
  // 带错误处理器
  /*
  getAirData() {
    return this.http.get<AirQuality>(this.airQualityUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  */
  // 带重试功能
  getAirData() {
    return this.http.get<AirQuality>(this.airQualityUrl)
    .pipe(
      retry(3), // 重试3次
      catchError(this.handleError)
    );
  }

  // 显示完整相应信息
  getAirDataResponse(): Observable<HttpResponse<AirQuality>> {
    return this.http.get<AirQuality>(
      this.airQualityUrl, { observe: 'response' });
  }

  // 错误处理器
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // 客户端或者网络发生错误时，处理它错误
      console.error('发生错误:', error.error.message);
    } else {

      // 后端返回了一个不成功的响应代码。
      // 响应体可能包含出错的信息，
      console.error(
        `错误状态码: ${error.status}, ` +
        `相应体是: ${error.error}`);
    }

    // 返回带有提示用户的错误消息的observable
    return throwError('有错误，请重试！');
  };

}
