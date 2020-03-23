import {Component, Input, OnInit} from '@angular/core';
import {todo} from "../model/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() transferArrayList:Array<todo>=[];

}
