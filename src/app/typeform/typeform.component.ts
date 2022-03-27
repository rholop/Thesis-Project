import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import '@typeform/embed/build/css/widget.css';
import { RequestService } from '../services/request.service';
@Component({
  selector: 'app-typeform',
  templateUrl: './typeform.component.html',
  styleUrls: ['./typeformcomponent.scss'],
})
export class TypeformComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TypeformComponent>,
    private request: RequestService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}
  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close('cancel');
  }

  onSubmit(): void {
    this.dialogRef.close(this.request.getQuizResponses(this.data));
  }
}
