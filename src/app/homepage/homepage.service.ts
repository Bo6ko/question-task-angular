import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from './questions-data/question.interface';
import { Answear } from './questions-data/answear.interface';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private questionsSubject = new BehaviorSubject<Question[]>([]);
  public questions$ = this.questionsSubject.asObservable();

  private selectedQuestionSubject = new BehaviorSubject<Question | any>(null);
  public selectedQuestion$ = this.selectedQuestionSubject.asObservable();

  private selectedAnswearSubject = new BehaviorSubject<Answear | any>(null);
  public selectedAnswear$ = this.selectedAnswearSubject.asObservable();

  private answearsCounterSubject = new BehaviorSubject<number>(0);
  public answearsCounter$ = this.answearsCounterSubject.asObservable();

  constructor() { }

  public get questions(): Question[] {
    return this.questionsSubject.value;
  }

  public set questions(questions: Question[]) {
    this.questionsSubject.next(questions);
  }

  public get selectedQuestion(): Question | any {
    return this.selectedQuestionSubject.value;
  }

  public set selectedQuestion(question: Question | any) {
    this.selectedQuestionSubject.next(question);
  }

  public get selectedAnswear(): Answear | any {
    return this.selectedAnswearSubject.value;
  }

  public set selectedAnswear(answear: Answear | any) {
    this.selectedAnswearSubject.next(answear);
  }

  public get answearsCounter(): number {
    return this.answearsCounterSubject.value;
  }

  public set answearsCounter(value: number) {
    this.answearsCounterSubject.next(value);
  }

  public answearsCounterIcreaseByOne() {
    this.answearsCounterSubject.next(this.answearsCounterSubject.value + 1);
  }
}
