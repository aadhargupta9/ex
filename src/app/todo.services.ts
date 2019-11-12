import {Injectable} from "@angular/core";
@Injectable({
  providedIn: "root"
})

export class storage
{
  constructor(){}
  task_list1=[]
  additem(task)
  {
    this.task_list1.push(task)
  }
  getitem(){
    return this.task_list1
  }
  deleteitem(index)
  {
    this.task_list1.splice(index,1)
  }
}