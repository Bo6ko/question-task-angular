import { Component, Input } from '@angular/core';
import { Question } from '../questions-data/question.interface';
import { Answear } from '../questions-data/answear.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAnswearComponent } from './confirm-answear/confirm-answear.component';
import { Router } from '@angular/router';
import { HomepageService } from '../homepage.service';
import { lastValueFrom } from "rxjs";
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  @Input() question: Question | any;

  constructor(
    private readonly matDialog: MatDialog,
    private readonly router: Router,
    private readonly homepageServices: HomepageService
  ) {
  }

  async onClickAnswear( answear: Answear ) {
    if ( !this.question.marked ) {
      const config = {
        data: {
          question: this.question,
          answear: answear,
        }
      }
      const dialogRef = this.matDialog.open( ConfirmAnswearComponent, config );
      const dialogIsConfirm = await lastValueFrom(dialogRef.afterClosed());
      if ( dialogIsConfirm ) {
        this.homepageServices.selectedQuestion = this.question;
        this.homepageServices.selectedAnswear = answear;
        this.router.navigate(['/page-callback']);
      }
    }
  }

}
