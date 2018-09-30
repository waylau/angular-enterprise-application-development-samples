import { Injectable }           from '@angular/core';

import { AdOneComponent }   from './ad-one.component';
import { AdTwoComponent } from './ad-two.component';
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [ 
      new AdItem(AdOneComponent,   {headline: '新启程',
                                        body: '跟老卫一起学Angular!'}),
      new AdItem(AdTwoComponent, {name: '老卫', bio: 'Welcome!'})

    ];
  }
}
