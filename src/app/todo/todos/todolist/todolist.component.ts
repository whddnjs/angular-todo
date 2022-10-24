import { Component, Input, OnInit } from '@angular/core';
import { Todomodel } from '../../share/todomodel';

@Component({
  selector: 'app-todolist',
  template: `<input type="checkbox" id="{{ todo.id }}" /><label for="{{ todo.id }}">{{
    todo.text
  }}</label>
  `,
})
export class TodolistComponent implements OnInit {
  @Input() todo: Todomodel;

  constructor() {}

  ngOnInit() {}
}
