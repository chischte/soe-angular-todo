import {Component} from '@angular/core';
import {todo} from "../model/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  transferArrayRoot: Array<todo> = [];
  receivedOutputMessage: String;

  receiveOutputFunction(msg){
  this.receivedOutputMessage=msg;
  }
}
