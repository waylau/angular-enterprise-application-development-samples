import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'; // 导入路由模块

import { IndexComponent } from './index/index.component'
import { NewsDetailComponent } from './news-detail/news-detail.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'news', component: NewsDetailComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)   // 导入路由配置
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
