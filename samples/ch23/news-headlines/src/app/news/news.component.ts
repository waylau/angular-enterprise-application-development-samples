import { Component, OnInit } from '@angular/core';
import { NewsService } from './../news.service';
import { NewsMsg, News } from './../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // 绑定模型用的变量
  news = [];

  // 注入NewsService服务
  constructor(private newsService: NewsService) { }

  // 初始化时就要获取数据
  ngOnInit() {
    this.showNewsData();

    this.newsService.tabSelected.subscribe(tab => {
      this.tabSelected(tab);

      this.showNewsData();
    });
  }

  // 指定参数类型NewsMsg
  showNewsData() {
    this.newsService.getNewsData().subscribe(
      //(newsApiData) =>   console.log(newsApiData),
      //(error) => console.log(error)
      (newsApiData: NewsMsg) => this.news = newsApiData.result.data
    );
  }

  // 接收选中Tab的事件
  tabSelected(tab: string) {
    this.newsService.setAlias(tab);
  }

}
