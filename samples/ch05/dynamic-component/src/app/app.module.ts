import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { AdOneComponent }   from './ad-one.component';
import { AdBannerComponent }    from './ad-banner.component';
import { AdTwoComponent } from './ad-two.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [AdService],
  declarations: [ AppComponent,
                  AdBannerComponent,
                  AdOneComponent,
                  AdTwoComponent,
                  AdDirective ],
  entryComponents: [ AdOneComponent, AdTwoComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

