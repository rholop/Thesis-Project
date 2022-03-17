import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TaskService } from '../task.service';
import { Task } from '../task';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TaskMakerComponent } from '../task-maker/task-maker.component';
import { Time } from '@angular/common';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss']
})
export class TaskListContainerComponent implements OnInit {

  // taskForm = this.fb.group({
  //   tasks: this.fb.array([this.fb.group({
  //     id: 0,
  //     name: '',
  //     priority: -1,
  //     dueDate: new Date('2019-01-16'),
  //     status: -1,
  //     timeNeeded: {hours: -1, minutes: -1},
  //   })])
  // });

  // get tasks(): FormArray {
  //   return this.taskForm.get('tasks') as FormArray;
  // }

  // get formValue(): Task[] {
  //   return this.taskForm.value as Task[];
  // }

  // constructor( private fb: FormBuilder, private taskService: TaskService) { }

  // ngOnInit(): void {
  //   // this.getTasks();
  // }

  // // getTasks(): void {
  // //   this.taskService.getTasks()
  // //   .subscribe(tasks => this.push(this.fb.group(tasks)));
  // // }

  // addTask(): void {
  //   const group = this.fb.group({
  //     id: '',
  //     name: '',
  //     priority: '',
  //     dueDate: new Date(''),
  //     status: '',
  //     timeNeeded: {hours: '', minutes: ''},
  //   });
  //   this.tasks.push(group);
  // }
  // id: number | undefined;
  // name: string | undefined;
  // priority: number | undefined;
  // dueDate: Date | undefined;
  // status: number | undefined;
  // timeNeeded: Time | undefined;

  numberOfTasks = 0;

  private newTask: Task = new Task();

  dialogSubmitted = false;

  constructor(public dialog: MatDialog, public taskService: TaskService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskMakerComponent, {
      minWidth: '30em',
      data: this.numberOfTasks,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === undefined) {}
      else {
        this.newTask = new Task(result);
        this.taskService.add(this.newTask);
        this.numberOfTasks++;
        console.log(typeof(result));
        this.dialogSubmitted = true;
      }
    });
  }


  ngOnInit(): void {
  }

}

