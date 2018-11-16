import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../category.service';
import { CategoryMsg } from './../category';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  // 绑定模型用的变量
  categories = [];

  // 注入CategoryService服务
  constructor(private categoryService: CategoryService) { }

  // 初始化时就要获取数据
  ngOnInit() {
    this.showCategoryData();
  }

  // 指定参数类型CategoryMsg
  showCategoryData() {
    this.categoryService.getCategoryData().subscribe(
      (categoryApiData: CategoryMsg) => this.categories = categoryApiData.data.categories
    );
  }

}
