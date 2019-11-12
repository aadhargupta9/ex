import { Component, OnInit } from '@angular/core';
import { storage } from "../todo.services";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private obj:storage) { }
  task_list=[]
  ngOnInit() {
    this.task_list=this.obj.task_list1
  }
  deletetask(index){
    this.obj.deleteitem(index)
  }

}
