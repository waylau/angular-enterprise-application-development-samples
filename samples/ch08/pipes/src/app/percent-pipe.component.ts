import { Component } from '@angular/core';

@Component({
    selector: 'app-percent-pipe',
    template: `<div>
      <!--结果为 '26%'-->
      <p>0.259 转换后为: {{a | percent}}</p>
   
      <!--结果为 '0,134.950%'-->
      <p>1.3495 转换后为:  {{b | percent:'4.3-5'}}</p>
    </div>`
  })
  export class PercentPipeComponent {
    a: number = 0.259;
    b: number = 1.3495;
  }