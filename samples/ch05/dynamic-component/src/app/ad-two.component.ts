import { Component, Input }  from '@angular/core';

import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>广告2</h3>
      <h4>{{data.name}}</h4>
      <p>{{data.bio}}</p>
    </div>
  `
})
export class AdTwoComponent implements AdComponent {
  @Input() data: any;
}


