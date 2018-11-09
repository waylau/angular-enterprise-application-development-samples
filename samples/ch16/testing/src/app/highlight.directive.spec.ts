import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component'
import { HighlightDirective } from './highlight.directive'

describe('HighlightDirective', () => {

  it('should have skyblue <h1>', () => {

    const fixture = TestBed.configureTestingModule({
      declarations: [ AppComponent, HighlightDirective],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .createComponent(AppComponent);
    fixture.detectChanges(); // 初始化绑定

    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    const bgColor = h1.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });
});
