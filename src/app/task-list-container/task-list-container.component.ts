import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskService } from '../task.service';
import { Task } from '../task';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { TaskMakerComponent } from '../task-maker/task-maker.component';
import { Time } from '@angular/common';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss'],
})
export class TaskListContainerComponent implements OnInit {
  numberOfTasks = 0;

  private newTask: Task = new Task();

  constructor(public dialog: MatDialog, public taskService: TaskService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskMakerComponent, {
      minWidth: '30em',
      data: this.numberOfTasks,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result === undefined) {
      } else {
        this.newTask = new Task(result);
        this.taskService.add(this.newTask);
        this.numberOfTasks++;
        console.log(typeof result);
      }
    });
  }

  clearTasks(): void {
    this.numberOfTasks = 0;
    this.taskService.clear();
  }

  ngOnInit(): void {}
}
