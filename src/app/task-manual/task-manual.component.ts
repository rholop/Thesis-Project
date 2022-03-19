import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-manual',
  templateUrl: './task-manual.component.html',
  styleUrls: ['./task-manual.component.scss'],
})
export class TaskManualComponent implements OnInit {
  manualTaskForm = this.fb.group({
    priority: '',
    timeNeed: {hours: '', minutes: ''}
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskManualComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close('cancel');
  }

  onSubmit(): void {
    console.warn(this.manualTaskForm.value);
    this.dialogRef.close(this.manualTaskForm.value);
  }
}
