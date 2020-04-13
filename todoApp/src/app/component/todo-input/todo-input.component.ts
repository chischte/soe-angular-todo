import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../model/todo";

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

  @Input() transferArrayInput: Array<Todo>=[];
  @Output() outputMessage = new EventEmitter;

  name: string;
  activity: string;
  newEntry: Todo;
  outputString:string;

  addTodo() {
    this.newEntry = {name: this.name, activity: this.activity};
    this.transferArrayInput.push(this.newEntry);
    this.name="";
    this.activity="";
  }

  generateOutput(){
    this.outputString="HAUDI"
    this.outputMessage.emit(this.outputString);
      }

}
