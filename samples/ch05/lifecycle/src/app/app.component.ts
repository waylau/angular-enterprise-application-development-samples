import {
  Component, OnInit, OnChanges, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit, SimpleChanges, Input
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges,
  DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit {

  title = '生命周期钩子的例子';
  logIndex: number = 1;  //计数器
  @Input() name: string;

  constructor() {
    this.logIt("constructor");
  }

  logIt(msg: string) {
    console.log(`#${this.logIndex++}  ${msg}`);
  }

  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }

  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }

  ngOnChanges(changes: SimpleChanges): void {
    let nameCurrentValue = changes['name'].currentValue;  // 属性当前值
    let namePreviousValue = changes['name'].previousValue; // 属性前一个值

    this.logIt("ngOnChanges的currentValue值是" + nameCurrentValue);
    this.logIt("ngOnChanges的previousValue值是" + namePreviousValue);
  }

  ngOnInit() {
    this.logIt("ngOnInit");
  }


}
