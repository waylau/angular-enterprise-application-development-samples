import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'; // 通过ViewChild方式与实现组件间通信

import { CategoryService } from './../category.service';
import { CategoryMsg, Category } from './../category';
import { NewsService } from './../news.service';
import { NewsComponent } from './../news/news.component';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  // 通过ViewChild方式与实现组件间通信
  @ViewChild(NewsComponent)
  private newsComponent: NewsComponent;

  // 绑定模型用的变量
  categories = [];
  selectedCategory: Category = null;

  // 注入CategoryService服务
  constructor(private categoryService: CategoryService,
    private newsService: NewsService   // 注入NewsService服务，用于组件间通信
    ) { }


  // 初始化时就要获取数据
  ngOnInit() {
    this.showCategoryData();
    //console.log(this.categoryService.getData());
  }

  // 指定参数类型CategoryMsg
  showCategoryData() {
    //this.categoryService.getCategoryData().subscribe(
      //(categoryApiData: CategoryMsg) => this.categories = categoryApiData.data.categories
    //);
    this.categories = this.categoryService.getCategoryData();
  }

  // 处理Tab切换事件
  handleTab(index: number) {
    console.log(index);
    this.selectedCategory = this.categories[index];
    console.log(this.selectedCategory.alias);

    // 触发更新服务
    //this.newsService.setAlias(this.selectedCategory.alias);

    // this.newsComponent.showNewsData();
    this.newsService.tabSelected.emit(this.selectedCategory.alias);
  }
}
