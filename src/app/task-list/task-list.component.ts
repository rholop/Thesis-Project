import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { DeleteOneTaskDialogComponent } from '../delete-one-task-dialog/delete-one-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

  openDeleteTaskDialog(index: number): void {
    const dialogRef = this.dialog.open(DeleteOneTaskDialogComponent, {minWidth: '30em', data: this.taskService.getTaskName(index)});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'yes') {this.deleteTask(index); }
      else {}
    });
  }

  ngOnInit(): void {}
}
