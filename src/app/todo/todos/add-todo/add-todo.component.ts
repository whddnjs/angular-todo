import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `<input type="text" placeholder="할일 추가" [(ngModel)]="newText" />
  <button (click)="addTodo(newText)">추가</button>`,
})
export class AddTodoComponent implements OnInit {
  @Output() onTodoAdded = new EventEmitter();
  newText: string;

  constructor() {}

  ngOnInit() {
    this.newText = '';
  }

  addTodo(newText) {
    if (!this.newText) {
      alert('할일을 입력해주세요');
      return false;
    }
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
