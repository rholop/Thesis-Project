import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Task } from '../interfaces/task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent {

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
    public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.warn(this.taskForm.value);
    this.dialogRef.close(this.taskForm.value);
  }
}
