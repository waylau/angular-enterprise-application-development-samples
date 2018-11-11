// 必须先导入下面这些
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';

// 启动生产模式
enableProdMode();

// 实例化Express服务器
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// 用于懒加载
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});

// 静态文件
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// 所有的路由都使用Universal引擎
app.get('*', (req, res) => {
  res.render('index', { req });
});

// 启动Node服务器
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
