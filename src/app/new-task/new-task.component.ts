import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent {
  taskForm = this.fb.group({
    id: this.data,
    name: ['', Validators.required],
    priority: -1,
    dueDate: ['', Validators.required],
    status: -1,
    timeNeeded: 0,
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
