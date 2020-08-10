import { Component, OnInit } from '@angular/core';
import {Questions} from '../../components/page/page.component';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  public question2: Questions = {} as Questions;

  constructor() {
    this.question2.questionNumber = 2;
    this.question2.question = 'Which of these islands are in the Caribbean Sea?';
    this.question2.answers = [
      [
        {value: 'Grenada', isTrue: true},
        {value: 'Barbados', isTrue: true},
        {value: 'Martinique', isTrue: true},
        {value: 'Jamaica', isTrue: true},
      ],
      [
        {value: 'Bora Bora', isTrue: false},
        {value: 'Easter Island', isTrue: false},
        {value: 'Cayman Islands', isTrue: true},
        {value: 'Galapagos', isTrue: false},
      ],
      [
        {value: 'Polynesia', isTrue: false},
        {value: 'Fiji', isTrue: false},
        {value: 'Cuba', isTrue: true},
        {value: 'Puerto Rico', isTrue: true},
      ],
      [
        {value: 'Antiqua', isTrue: true},
        {value: 'Maui', isTrue: false},
        {value: 'Malta', isTrue: false},
        {value: 'Tahiti', isTrue: false},
      ],
    ];
  }

  ngOnInit(): void {
  }

}
