import {Component, OnInit} from '@angular/core';
import {Questions} from 'src/app/components/page/page.component';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  public question1: Questions = {} as Questions;

  constructor() {

    this.question1.questionNumber = 1;
    this.question1.question = 'Which of these science fiction books feature aliens?';
    this.question1.answers = [
      [
        {value: 'The War of the Worlds', isTrue: true},
        {value: 'The Stand', isTrue: false},
        {value: 'Starship Troopers', isTrue: true},
        {value: 'The Road', isTrue: false},
      ],
      [
        {value: 'The Sirens of Titan', isTrue: true},
        {value: 'The Host', isTrue: true},
        {value: 'The Andromeda Strain', isTrue: true},
        {value: 'I, Robot', isTrue: false},
      ],
      [
        {value: 'Cat\'s Cradle', isTrue: false},
        {value: 'Solaris', isTrue: true},
        {value: 'Brave New World', isTrue: false},
        {value: 'Rendezvous with Rama', isTrue: true},
      ],
      [
        {value: 'World War Z', isTrue: false},
        {value: 'Fahrenheit 451', isTrue: false},
        {value: 'The Tommyknockers', isTrue: true},
        {value: 'Nineteen Eighty-Four', isTrue: false},
      ],
    ];
  }

  ngOnInit(): void {
  }

}
