import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from '../homepage/homepage.service';
import { questionsApi } from '../homepage/questions-data/questions.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    private readonly homepageServices: HomepageService
  ) {}

  onClickRestartTest() {
    // lodash instead this
    const clonedArray = JSON.stringify(questionsApi);
    this.homepageServices.questions = JSON.parse(clonedArray);
    this.homepageServices.answearsCounter = 0;
    this.router.navigate(['']);
  }
}
