import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CurrencyPipeComponent } from './currency-pipe.component';
import { PowCalculatorComponent } from './pow-calculator.component';
import { PowCalculatorPipe } from './pow-calculator.pipe';
import { PercentPipeComponent } from './percent-pipe.component';
import { UserBirthdayComponent } from './user-birthday.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    UserBirthdayComponent,
    PowCalculatorComponent,
    PowCalculatorPipe,
    CurrencyPipeComponent,
    PercentPipeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
