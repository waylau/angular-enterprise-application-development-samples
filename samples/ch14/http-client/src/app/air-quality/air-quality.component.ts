import { Component, OnInit } from '@angular/core';
import { AirQuality } from './air-quality';
import { AirQualityService } from './air-quality.service';


@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {
  airQuality: AirQuality;
  headers: string[];  // 存放HTTP头信息
  error: any; // 错误信息

  // 注入AirQualityService服务
  constructor(private airQualityService: AirQualityService) { }

  ngOnInit() {
  }

  // 显示空气质量数据
  // 没有指定参数类型
  /*
  showAirQualityData() {
    this.airQualityService.getAirData().subscribe(
      (airQualityData: AirQuality) => this.airQuality = {
        status: airQualityData['status'],
        data:  {aqi: airQualityData['data']['aqi'], time: airQualityData['data']['time']}
    }
    );
  }
  */
  // 指定参数类型AirQuality
  showAirQualityData() {
    this.airQualityService.getAirData().subscribe(
      (airQualityData: AirQuality) => this.airQuality = airQualityData, // 响应成功
      error => this.error = error // 响应失败
    );
  }

  // 显示HTTP头
  showAirQualityResponse() {
    this.airQualityService.getAirDataResponse()

      // resp的类型是`HttpResponse<AirQuality>`
      .subscribe(resp => {

        // 显示HTTTP头
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // 访问HTTP消息体，并转为AirQuality类型
        this.airQuality = resp.body;
      });
  }
}
