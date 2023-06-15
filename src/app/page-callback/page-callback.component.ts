import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from '../homepage/homepage.service';
import { Question } from '../homepage/questions-data/question.interface';
import { Answear } from '../homepage/questions-data/answear.interface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-page-callback',
  templateUrl: './page-callback.component.html',
  styleUrls: ['./page-callback.component.css']
})
export class PageCallbackComponent {

  questions: Question[] = [];
  question: Question | any;
  clientAnswear: Answear = {
    id: 0,
    answear: '',
    isCorrect: false
  };
  answearsCounter: number = 0;

  constructor(
    private readonly router: Router,
    private readonly homepageService: HomepageService
  ) {
    homepageService.selectedAnswear$
    .pipe(untilDestroyed(this))
    .subscribe(answear =>{
      if ( answear !== null ) {
        this.clientAnswear = answear;
        if ( answear.isCorrect ) {
          homepageService.answearsCounterIcreaseByOne();
        }
      } else {
        this.router.navigate(['']);
      }
    });

    homepageService.answearsCounter$
    .pipe(untilDestroyed(this))
    .subscribe(count =>{
      this.answearsCounter = count;
    });

    homepageService.questions$
    .pipe(untilDestroyed(this))
    .subscribe(questions =>{
      this.questions = questions;
    });
  }

}
