import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // 导入HttpHeaders解决跨域

import { CategoryMsg, Category} from './category'; // 导入新闻分类的包装类型
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // 新闻分类API地址
  //categoryApiUrl = 'http://ap/news/category?signature=85f2755f588c95e3ae97a57a9341143c&access_key=R7kTDQi46gPmnOuw&timestamp=1542441851342';
  categoryApiUrl = 'http://v.juhe.cn/toutiao/index?type=top&key=d95eb2c02b12e841bafb5a49d20924be';

  categories: Category[] = [
    { alias: 'top', name: '首页' },
    { alias: 'shehui', name: '社会' },
    { alias: 'guonei', name: '国内' },
    { alias: 'guoji', name: '国际' },
    { alias: 'yule', name: '娱乐' },
    { alias: 'tiyu', name: '体育' },
    { alias: 'junshi', name: '军事' },
    { alias: 'keji', name: '科技' },
    { alias: 'caijing', name: '财经' },
    { alias: 'shishang', name: '时尚' }
  ];

  // 注入HttpClient
  constructor(private http: HttpClient) { }

  // 指定参数类型CategoryMsg
  getCategoryData() {
    //return this.http.get<CategoryMsg>(this.categoryApiUrl, 
      //this.httpOptions); // 设置Http头
      return this.categories;
  }

  getData() {
      return this.http.get<string>(this.categoryApiUrl);
  }

  // 解决跨域访问资源
  private httpOptions: Object = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true',
  'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, DELETE', 'Content-Type': 'application/json' })
  }

}
