import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Time } from '@angular/common';

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

  update(idToFind: number, updateTime: number, updatePriority: number): void {
    const index = this.tasks.findIndex(task => task.id === idToFind);
    this.tasks[index].timeNeeded = updateTime;
    this.tasks[index].priority = updatePriority;
    this.tasks[index].status = 0;
    console.log('task updated');
    console.log(this.tasks[index]);
  }

  getTaskName(id: number): any {
    return this.tasks.find(task => task.id === id)?.name;
  }

  getNumberofTasks(): number {
    return this.tasks.length + 1;
  }

  getTaskList(): Array<Task> {
    return this.tasks;
  }
}
