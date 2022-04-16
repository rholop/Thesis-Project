import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  public hasTask: boolean;
  private id: number;

  constructor() {this.hasTask = false; this.id = 0;}

  private convertTask(task: Task): Task {
    let tempTask: Task;
    tempTask = {
      id: task.id,
      name: task.name,
      priority: task.priority,
      dueDate: new Date(task.dueDate),
      status: task.status,
      timeNeeded: task.timeNeeded,
    };
    return tempTask;
  }

  add(task: Task): void {
    this.tasks.push(this.convertTask(task));
    this.hasTask = true;
    this.id++;
  }

  clear(): void {
    this.tasks = [];
    this.hasTask = false;
    this.id = 0;
  }

  delete(idToFind: number): void {
    const index = this.tasks.findIndex((task) => task.id === idToFind);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    if (this.tasks.length === 0) {
      this.hasTask = false;
    }
  }

  update(idToFind: number, updateTime: number, updatePriority: number): void {
    const index = this.tasks.findIndex((task) => task.id === idToFind);
    this.tasks[index].timeNeeded = updateTime;
    this.tasks[index].priority = updatePriority;
    this.tasks[index].status = 0;
  }

  getTaskName(id: number): any {
    return this.tasks.find((task) => task.id === id)?.name;
  }

  getNewId(): number {
    return this.id;
  }

  getTaskList(): Array<Task> {
    return this.tasks;
  }
}
