import { Component, OnInit } from '@angular/core';
import {Questions} from '../../components/page/page.component';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  public question4: Questions = {} as Questions;

  constructor() { }

  ngOnInit(): void {
    this.question4.questionNumber = 4;
    this.question4.question = 'Which of these books were written by physicist Stephen Hawking?';
    this.question4.answers = [
      [
        {value: 'The Human Side', isTrue: false},
        {value: 'Essays in Humanism', isTrue: false},
        {value: 'Ideas and Opinions', isTrue: false},
        {value: 'My Brief History', isTrue: true},
      ],
      [
        {value: 'God Created the Integers', isTrue: true},
        {value: 'The Grand Design', isTrue: true},
        {value: 'Why Socialism', isTrue: false},
        {value: 'On the Electrodynamics of Moving Bodies', isTrue: false},
      ],
      [
        {value: 'A Brief History of Time', isTrue: true},
        {value: 'George\'s Cosmic Treasure Hunt', isTrue: true},
        {value: 'The Meaning of Relativity', isTrue: false},
        {value: 'On Peace', isTrue: false},
      ],
      [
        {value: 'The Universe in a Nutshell', isTrue: true},
        {value: 'A Briefer History of Time', isTrue: true},
        {value: 'The World As I See It', isTrue: false},
        {value: 'On The Shoulders of Giants', isTrue: true},
      ],
    ];
  }

}
