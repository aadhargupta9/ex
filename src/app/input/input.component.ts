import { Component, OnInit } from '@angular/core';
import { storage } from "../todo.services";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private obj:storage) { }

  ngOnInit() {
  }
  task
  transtask(){
    this.obj.additem(this.task)
  }
}
