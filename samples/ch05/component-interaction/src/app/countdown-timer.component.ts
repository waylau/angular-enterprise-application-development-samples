import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent {

  intervalId = 0;
  message = '时间递减';
  seconds = 100;

  decrease() { this.countDown(); }

  private countDown() {
    this.seconds -= 1;
  }
}
