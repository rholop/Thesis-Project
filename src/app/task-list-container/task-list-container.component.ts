import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
import {
  MatDialog
} from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { Time } from '@angular/common';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss'],
})
export class TaskListContainerComponent implements OnInit {
  private newTask: Task = new Task();

  constructor(public dialog: MatDialog, public taskService: TaskService) {}

  openNewTaskDialog(): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      minWidth: '30em',
      data: this.taskService.getNumberofTasks(),
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result === undefined) {
      } else {
        this.newTask = new Task(result);
        this.taskService.add(this.newTask);
        console.log(typeof result);
      }
    });
  }

  clearTasks(): void {
    this.taskService.clear();
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {minWidth: '30em'});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'yes') {this.clearTasks(); }
      else {}
    });
  }

  ngOnInit(): void {}
}
