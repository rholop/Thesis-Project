import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) {}

  onYes(): void {
    this.dialogRef.close('yes');
  }

  onNo(): void {
    this.dialogRef.close('no');
  }

  ngOnInit(): void {}
}
