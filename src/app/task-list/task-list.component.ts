import { TaskService } from '../services/task.service';
import { Component, OnInit } from '@angular/core';
import { DeleteOneTaskDialogComponent } from '../delete-one-task-dialog/delete-one-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TypeformComponent } from '../typeform/typeform.component';
import { Time } from '@angular/common';
import { TaskManualComponent } from '../task-manual/task-manual.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(public dialog: MatDialog, public taskService: TaskService) {}

  deleteTask(index: number): void {
    this.taskService.delete(index);
  }

  updateTask(index: number, time: number, priority: number): void {
    this.taskService.update(index, time, priority);
  }

  openDeleteTaskDialog(index: number): void {
    const dialogRef = this.dialog.open(DeleteOneTaskDialogComponent, {minWidth: '30em', data: this.taskService.getTaskName(index)});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'yes') {this.deleteTask(index); }
      else {}
    });
  }

  openTypeformDialog(index: number): void {
    const dialogRef = this.dialog.open(TypeformComponent, {data: index, minWidth: '50em', minHeight: '30em'});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'cancel') {}
      else {
        this.updateTask(index, result.timeNeed, result.priority);
      }
    });
  }

  openManualTaskDialog(index: number): void {
    const dialogRef = this.dialog.open(TaskManualComponent, {data: this.taskService.getTaskName(index)});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'cancel') {}
      else {
        this.updateTask(index, result.timeNeed, result.priority);
      }
    });
  }

  ngOnInit(): void {}
}
