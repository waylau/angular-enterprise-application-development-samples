import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './../app.module';
import { AppComponent } from './../app.component';

@NgModule({
  declarations: [],
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule // 用于懒加载
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
