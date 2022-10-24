import { Component, OnInit } from '@angular/core';
import { Todomodel } from '../share/todomodel';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todomodel[];

  constructor() {
    this.todos = [
      { id: 1, text: '운동하기' },
      { id: 2, text: '공부하기' },
    ];
  }

  ngOnInit() {}

  addTodo(event: string) {
    this.todos.push({
      id: this.todos.length + 1,
      text: event,
    });
  }

  clear() {
    this.todos = [];
  }

  clearTodo(todo) {
    let idx = this.todos.findIndex(function (item) {
      return item.id === todo.id;
    });
    this.todos.splice(idx, 1);
  }
}
