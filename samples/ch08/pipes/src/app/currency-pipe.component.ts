import { Component } from '@angular/core';

@Component({
    selector: 'app-currency-pipe',
    template: `<div>
      <!--结果为 '$0.26'-->
      <p>0.259 转换后为: {{a | currency}}</p>
   
      <!--结果为 'CA$0.26'-->
      <p>0.259 转换后为: {{a | currency:'CAD'}}</p>
   
      <!--结果为 'CAD0.26'-->
      <p>0.259 转换后为: {{a | currency:'CAD':'code'}}</p>
   
      <!--结果为 'CA$0,001.35'-->
      <p>1.3495 转换后为: {{b | currency:'CAD':'symbol':'4.2-2'}}</p>
   
      <!--结果为 '$0,001.35'-->
      <p>1.3495 转换后为: {{b | currency:'CAD':'symbol-narrow':'4.2-2'}}</p>

    </div>`
  })
  export class CurrencyPipeComponent {
    a: number = 0.259;
    b: number = 1.3495;
  }