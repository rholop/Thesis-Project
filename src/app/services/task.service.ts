import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [
    // new Task({
    //   id: 0,
    //   name: 'Math HW',
    //   priority: 2,
    //   dueDate: new Date('2022-04-08'),
    //   status: 0,
    //   timeNeeded: 1.25,
    // }),
    // new Task({
    //   id: 1,
    //   name: 'Physics HW',
    //   priority: 1,
    //   dueDate: new Date('2022-04-08'),
    //   status: 0,
    //   timeNeeded: 2.5,
    // }),
    // new Task({
    //   id: 2,
    //   name: 'Calculus HW',
    //   priority: 3,
    //   dueDate: new Date('2022-04-10'),
    //   status: 0,
    //   timeNeeded: 2.5,
    // }),
    // new Task({
    //   id: 3,
    //   name: 'Clean Room',
    //   priority: 1,
    //   dueDate: new Date('2022-04-10'),
    //   status: 0,
    //   timeNeeded: 2,
    // }),
  ];

  constructor() {}

  convertTask(task: Task): Task {
    let tempTask: Task;
    tempTask = {
      id: task.id,
      name: task.name,
      priority: task.priority,
      dueDate: new Date(task.dueDate),
      status: task.status,
      timeNeeded: task.timeNeeded
    };
    return tempTask;
  }

  add(task: Task): void {
    this.tasks.push(this.convertTask(task));
    // console.log(task);
    // console.log('task successfully added');
    // console.log('current tasks');
    // console.log(this.tasks);
  }

  clear(): void {
    this.tasks = [];
  }

  delete(idToFind: number): void {
    const index = this.tasks.findIndex((task) => task.id === idToFind);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    console.log('taskdelete');
    console.log(this.tasks);
  }

  update(idToFind: number, updateTime: number, updatePriority: number): void {
    const index = this.tasks.findIndex((task) => task.id === idToFind);
    this.tasks[index].timeNeeded = updateTime;
    this.tasks[index].priority = updatePriority;
    this.tasks[index].status = 0;
    // console.log('task updated');
    // console.log(this.tasks[index]);
  }

  getTaskName(id: number): any {
    return this.tasks.find((task) => task.id === id)?.name;
  }

  getNumberofTasks(): number {
    return this.tasks.length + 1;
  }

  getTaskList(): Array<Task> {
    return this.tasks;
  }
}
