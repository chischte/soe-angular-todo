import {Component, Input, OnInit} from '@angular/core';
import {todo} from "../model/todo";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() transferArrayInput: Array<todo>=[];

  name: string;
  activity: string;
  newEntry: todo;

  addTodo() {
    this.newEntry = {name: this.name, activity: this.activity};
    this.transferArrayInput.push(this.newEntry);
  }

}
