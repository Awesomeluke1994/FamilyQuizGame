import { Component, OnInit } from '@angular/core';
import {Questions} from '../../components/page/page.component';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  public question3: Questions = {} as Questions;

  constructor() { }

  ngOnInit(): void {
    this.question3.questionNumber = 3;
    this.question3.question = 'Which of the following sports are played in the summer paralympic games?';
    this.question3.answers = [
      [
        {value: 'Baseball', isTrue: false},
        {value: 'Cricket', isTrue: false},
        {value: 'Tennis', isTrue: true},
        {value: 'Volleyball', isTrue: true},
      ],
      [
        {value: 'Rugby', isTrue: true},
        {value: 'Pentathlon', isTrue: false},
        {value: 'Taekwondo', isTrue: true},
        {value: 'Boxing', isTrue: false},
      ],
      [
        {value: 'Badminton', isTrue: true},
        {value: 'Archery', isTrue: true},
        {value: 'Football', isTrue: false},
        {value: 'Fencing', isTrue: true},
      ],
      [
        {value: 'Goalball', isTrue: true},
        {value: 'Squash', isTrue: false},
        {value: 'Golf', isTrue: false},
        {value: 'Judo', isTrue: false},
      ],
    ];
  }

}
