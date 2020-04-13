import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../model/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() transferArrayList: Array<Todo> = [];

  deleteTodo(msg: Todo) {
    const index: number = this.transferArrayList.indexOf(msg);
    if (index !== -1) {
      this.transferArrayList.splice(index, 1);
    }
  }
}
