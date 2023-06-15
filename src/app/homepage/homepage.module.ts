import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { QuestionComponent } from './question/question.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { ConfirmAnswearComponent } from './question/confirm-answear/confirm-answear.component';
import { HomepageService } from './homepage.service';


@NgModule({
  declarations: [
    HomepageComponent,
    QuestionComponent,
    ConfirmAnswearComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    HomepageComponent
  ],
  providers: [
    HomepageService
  ]
})
export class HomepageModule { }
