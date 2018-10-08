import { Component } from '@angular/core';
import { QuestionService } from './dynamic-form/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = '响应式表单';

  questions: any[];
 
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
