import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Task } from '../task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-maker',
  templateUrl: './task-maker.component.html',
  styleUrls: ['./task-maker.component.scss'],
})
export class TaskMakerComponent {

  taskForm = this.fb.group({
    id: this.data,
    name: '',
    priority: -1,
    dueDate: '',
    status: -1,
    timeNeeded: { hours: 0, minutes: 0 },
  });


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskMakerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.warn(this.taskForm.value);
    this.dialogRef.close(this.taskForm.value);
  }
}
