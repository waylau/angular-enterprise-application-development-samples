import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../category.service';
import { NewsService } from './../news.service';


@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  // 绑定模型用的变量
  categories = [];

  // 选中的分类别名
  selectedCategoryAlias: string = null;

  // 注入CategoryService服务
  constructor(private categoryService: CategoryService,
    private newsService: NewsService   // 注入NewsService服务，用于组件间通信
  ) { }


  // 初始化时就要获取数据
  ngOnInit() {
    this.showCategoryData();
  }

  // 展示分类数据
  showCategoryData() {
    this.categories = this.categoryService.getCategoryData();
  }

  // 处理Tab切换事件
  handleTab(index: number) {
    this.selectedCategoryAlias = this.categories[index].alias;

    // 触发导航切换的事件
    this.newsService.tabSelected.emit(this.selectedCategoryAlias);
  }
}
