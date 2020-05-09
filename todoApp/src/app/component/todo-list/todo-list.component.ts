import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../model/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{

  constructor(private todoService: TodoService) { }

  @Input() todoArrayList: Array<Todo> = [];
  @Output() updateTodoList: EventEmitter<void> = new EventEmitter<void>();

  deleteTodo(index: number): void {
    this.todoService.deleteTodo(this.todoArrayList[index])
      .subscribe((response: any) => {
        this.updateTodoList.emit();
      });
  }
}
