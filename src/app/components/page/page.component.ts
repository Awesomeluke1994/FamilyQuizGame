import { Component, OnInit, Input } from '@angular/core';
import {DataItem} from "../table/table.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {


  @Input()
  public question: Questions;

  public nextQuestionShow: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public complete() {
    this.nextQuestionShow = true;
  }

  public goToNextQuestion() {
    const nextQuestionNumber = this.question.questionNumber + 1;
    if (nextQuestionNumber === 6){
      this.router.navigateByUrl('');
      return;
    }
    this.router.navigateByUrl(`question${nextQuestionNumber}`);
  }


}

export interface Questions {
  questionNumber: number,
  question: string;
  answers: DataItem[][]
}
