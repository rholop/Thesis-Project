import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-delete-one-task-dialog',
  templateUrl: './delete-one-task-dialog.component.html',
  styleUrls: ['./delete-one-task-dialog.component.scss']
})
export class DeleteOneTaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteOneTaskDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  onYes(): void {
    this.dialogRef.close('yes');
  }

  onNo(): void {
    this.dialogRef.close('no');
  }

  ngOnInit(): void {
  }


}
