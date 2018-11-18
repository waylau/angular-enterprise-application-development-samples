import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'; // 导入路由模块

import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  { path: 'news', component: NewsDetailComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)   // 导入路由
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
