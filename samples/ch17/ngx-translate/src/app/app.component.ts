import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 注入TranslateService服务
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');   // 设置默认语言
  }

  // 使用语言
  useLanguage(language: string) {
    this.translateService.use(language);
  }
}
