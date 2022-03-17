import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { TASKS } from './mock_tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasks: Task[] = [];

  constructor() { }

  add(task: Task): void {
    this.tasks.push(task);
    console.log(task);
    console.log('task successfully added');
    console.log('current tasks');
    console.log(this.tasks);
  }

  clear(): void {
    this.tasks = [];
  }

  getNumberofTasks(): number {
    return this.tasks.length + 1;
  }
}
