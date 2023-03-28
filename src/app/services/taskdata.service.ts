import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tasks } from './tasks';
import * as Rx from "rxjs";
import { Subject } from 'rxjs';  
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksUrl = 'assets/tasks.json';
  public tasks: Task[] = tasks;
  tasksSubject =new Rx.ReplaySubject(1);
  
  constructor(private http: HttpClient) { }

  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.tasksUrl);
  // }
  getTasks(){
    return this.tasksSubject.asObservable();
  }
  updateTask(task:Task, id: number){
    this.tasks[id] = task;

    this.tasksSubject.next(this.tasks)
  }
  addTask(task:Task|any){
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks)
  }

  deleteTask(task:any){
   this.tasks = this.tasks.filter((val:Task) => val.id != task.id )
    this.tasksSubject.next(this.tasks)

  }
  
}