import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';


//// 父组件与子组件通过本地变量交互, #timer
@Component({
  selector: 'app-countdown-parent-lv',
  template: `
  <h3>时间递减（本地变量）</h3>
  <button (click)="timer.decrease()">递减</button>
  <div class="seconds">{{timer.seconds}}</div>
  <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrls: ['../assets/demo.css']
})
export class CountdownLocalVarParentComponent { }


//// ViewChild
@Component({
  selector: 'app-countdown-parent-vc',
  template: `
  <h3>时间递减（ViewChild）</h3>
  <button (click)="decrease()">递减</button>
  <div class="seconds">{{ seconds() }}</div>
  <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['../assets/demo.css']
})
export class CountdownViewChildParentComponent {

  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  decrease() { this.timerComponent.decrease(); }

  seconds() { return this.timerComponent.seconds; }
}
