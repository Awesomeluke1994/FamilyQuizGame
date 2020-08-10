import { Component, OnInit } from '@angular/core';
import {Questions} from '../../components/page/page.component';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  public question5: Questions = {} as Questions;

  constructor() { }

  ngOnInit(): void {
    this.question5.questionNumber = 5;
    this.question5.question = 'Which of these sayings have been slogans for Coca-Cola?';
    this.question5.answers = [
      [
        {value: 'Gotta Have It', isTrue: false},
        {value: 'You Got the Right One Baby', isTrue: false},
        {value: 'Be Really Refreshed', isTrue: true},
        {value: 'Six Million a Day', isTrue: true},
      ],
      [
        {value: 'It\'s the Real Thing', isTrue: true},
        {value: 'Life Tastes Good', isTrue: true},
        {value: 'Something For Everyone', isTrue: false},
        {value: 'Catch the Wave', isTrue: true},
      ],
      [
        {value: 'Right Now', isTrue: false},
        {value: 'Look Up America', isTrue: true},
        {value: 'The Choice Is Yours', isTrue: false},
        {value: 'Ice Cold Sunshine', isTrue: true},
      ],
      [
        {value: 'Sign of Good Taste', isTrue: true},
        {value: 'We\'ve Got the Taste', isTrue: false},
        {value: 'The Choice of a New Generation', isTrue: false},
        {value: 'Generation Next', isTrue: false},
      ]
    ];
  }

}
