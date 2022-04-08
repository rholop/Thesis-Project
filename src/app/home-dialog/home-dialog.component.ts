import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.scss'],
})
export class HomeDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<HomeDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onYes(): void {
    this.dialogRef.close('yes');
  }

  ngOnInit(): void {}
}
