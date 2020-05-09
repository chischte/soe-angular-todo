import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../model/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  constructor(private todoService: TodoService) { }

  todoName: string;
  todoActivity: string;

  @Input() todoArrayInput: Array<Todo>=[];
  @Output() updateTodoList: EventEmitter<void> = new EventEmitter<void>();

  addTodo() {
    const todo = {name: this.todoName, value: this.todoActivity};
    this.todoService.insertTodo(todo)
      .subscribe((response: any) => {
        this.todoName = '';
        this.todoActivity = '';
        this.updateTodoList.emit();
      });
  }
}
