import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // 导入路由器相关的模块

import { AppComponent } from './app.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// 路由器配置
const appRoutes: Routes = [
  { path: 'dashborad', component: DashboradComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', component: PageNotFoundComponent }  // 通配符路由
];


@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    UserListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, // 提供路由器配置
      { enableTracing: true } // 启动debug
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
