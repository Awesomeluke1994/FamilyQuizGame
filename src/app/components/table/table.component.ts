import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  @Input()
  public dataSet: DataItem[][];
  private correctAnswers = 0;
  private foundAnswers = 0;

  @Output()
  public complete: EventEmitter<void> = new EventEmitter<void>();

  constructor() {

  }

  ngOnInit(): void {
    this.findCorrectAnswers();
  }

  public clickToShow($event: any, colIndex: number, rowIndex: number) {
    const subItem = this.dataSet[colIndex][rowIndex];
    if (subItem.shown) { return; }
    const classList = window.document.getElementById(`${colIndex}-${rowIndex}-cell`).classList;
    subItem.shown = true;
    classList.remove('selected');
    if (!subItem.isTrue) {
      classList.add('false');
      return;
    }
    classList.add('true');
    this.foundAnswers++;
    this.checkIfAllAnswersAreCorrectAndShowAll();
  }

  public findCorrectAnswers() {
    for (let i = 0; i < this.dataSet.length; i++) {
      for (let i2 = 0; i2 < this.dataSet[i].length; i2++) {
        const dataItem = this.dataSet[i][i2];
        if (dataItem.isTrue ) {
          this.correctAnswers++;
        }
      }
    }
  }

  public checkIfAllAnswersAreCorrectAndShowAll() {
    if (this.correctAnswers === this.foundAnswers) {
      for (let i = 0; i < this.dataSet.length; i++) {
        for (let i2 = 0; i2 < this.dataSet[i].length; i2++) {
          const elementClassList = window.document.getElementById(`${i}-${i2}-cell`).classList;
          const dataItem = this.dataSet[i][i2];
          dataItem.isTrue ? elementClassList.add('true') : elementClassList.add('false');
        }
      }
      this.complete.emit();
    }
  }

  public hover(item: DataItem, colIndex: number, rowIndex: number) {
    if (item.shown) { return; }
    const classList = window.document.getElementById(`${colIndex}-${rowIndex}-cell`).classList;
    classList.add('selected');
  }

  public removeHover(event) {
    const classList = event.target.classList;
    classList.remove('selected');
  }
}

export interface DataItem {
  value: string;
  isTrue: boolean;
  shown?: boolean;
}
