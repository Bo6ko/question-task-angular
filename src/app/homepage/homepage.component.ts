import { Component } from '@angular/core';
import { questionsApi } from './questions-data/questions.data';
import { Question } from './questions-data/question.interface';
import { HomepageService } from './homepage.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
// import { cloneDeep } from 'lodash';
// for array cloning

@UntilDestroy()
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  questions: Question[] = [];

  constructor(
    private readonly homepageService: HomepageService
  ) {
    homepageService.questions$
    .pipe(untilDestroyed(this))
    .subscribe(q => {
      if ( q.length === 0 ) {
        // lodash instead this
        const clonedArray = JSON.stringify(questionsApi);
        homepageService.questions = JSON.parse(clonedArray);
      } else {
        this.questions = q;
      }
    })
  }
  
}
