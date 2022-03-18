import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { TASKS } from './mock_tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [];

  constructor() {}

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

  delete(idToFind: number): void {
    const index = this.tasks.findIndex(task => task.id === idToFind);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    console.log('taskdelete');
    console.log(this.tasks);
  }

  getTaskName(id: number): any {
    return this.tasks.find(task => task.id === id)?.name;
  }

  getNumberofTasks(): number {
    return this.tasks.length + 1;
  }
}
