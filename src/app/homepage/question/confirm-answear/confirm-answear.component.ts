import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Answear } from '../../questions-data/answear.interface';
import { HomepageService } from '../../homepage.service';
import { Question } from '../../questions-data/question.interface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-confirm-answear',
  templateUrl: './confirm-answear.component.html',
  styleUrls: ['./confirm-answear.component.css']
})
export class ConfirmAnswearComponent {

  questions: Question[] | any;
  question: Question | any;
  answear: Answear;

  constructor(
    private readonly dialogRef: MatDialogRef<ConfirmAnswearComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly dialogData: any,
    private readonly homepageService: HomepageService
  ) {
    this.question = dialogData.question;
    this.answear = dialogData.answear;

    homepageService.questions$
    .pipe(untilDestroyed(this))
    .subscribe(q => {
      this.questions = q;
    })
  }

  async onCLickConfirm() {
    this.questions.map( (q: Question) => {
      if ( q.id === this.question.id ) {
        q.marked = true;
        this.question.answears.map( (a: Question) => {
          if ( a.id === this.answear.id ) {
            a.marked = true
          }
        } )
      }
    } )
    this.homepageService.questions = this.questions
    this.dialogRef.close(true);
  }

  onClickCancel() {
    this.dialogRef.close(false);
  }

}
