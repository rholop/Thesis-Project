import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from '../task';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-maker',
  templateUrl: './task-maker.component.html',
  styleUrls: ['./task-maker.component.scss']
})
export class TaskMakerComponent {
  // taskForm = this.fb.group({
  //   tasks: this.fb.array([this.fb.group({
  //     id: '',
  //     name: '',
  //     priority: -1,
  //     dueDate: '',
  //     status: -1,
  //     timeNeeded: {hours: 0, minutes: 0}
  //   })])
  // });

private newTask: Task = new Task();
numberOfTasks: number | undefined;

taskForm = this.fb.group({
      id: this.data,
      name: '',
      priority: -1,
      dueDate: '',
      status: -1,
      timeNeeded: {hours: 0, minutes: 0}
    });

  // get tasks(): FormArray {
  //   return this.taskForm.get('tasks') as FormArray;
  // }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskMakerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // updateTasks(): void {
  //   const newTask: Task = {
  //     id: 0,
  //     name: '',
  //     priority: -1,
  //     dueDate: new Date(),
  //     status: -1,
  //     timeNeeded: {hours: 0, minutes: 0}
  //   };
  //   this.taskForm.patchValue({
  //     tasks: newTask,
  //   });
  // }

  // addTask(): void {
  //   console.log('submit');
  //   this.newTask = new Task(this.taskForm.value);
  //   this.taskService.add(this.newTask);
  // }

  onSubmit(): void {
    console.warn(this.taskForm.value);
    this.dialogRef.close(this.taskForm.value);
  }

}
