import { ActivatedRoute } from '@angular/router';  // 用于获取路由参数
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; // 用于HTML过滤
import { Location } from '@angular/common'; // 用于回退浏览记录

import { NewsDetailService } from '../news-detail.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  newsDetailData = null;
  newsUrl = null;

  constructor(private newsDetailService: NewsDetailService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,  
    private location: Location) { }

  ngOnInit() {
    this.showNewsDetailData();
  }

  // 展示新闻详情数据
  showNewsDetailData() {
    this.route.queryParams.subscribe(p => this.newsUrl = p.newsUrl);// 获取参数

    this.newsDetailService.getNewsData(this.newsUrl).subscribe(
      (newsApiData) => this.newsDetailData =
        this.domSanitizer.bypassSecurityTrustHtml(newsApiData.toString()) //HTML过滤
    );
  }

  // 返回
  goback() {
    // 浏览器回退浏览记录
    this.location.back();
  }
}
