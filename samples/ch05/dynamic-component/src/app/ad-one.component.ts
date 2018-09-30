import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h3>广告1</h3>
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `
})
export class AdOneComponent implements AdComponent {
  @Input() data: any;

}

