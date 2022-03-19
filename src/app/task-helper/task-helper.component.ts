import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { createPopup, createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';
@Component({
  selector: 'app-task-helper',
  templateUrl: './task-helper.component.html',
  styleUrls: ['./task-helper.component.scss'],
})
export class TaskHelperComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskHelperComponent>) {}

  title = 'CodeSandbox';

  ngOnInit(): void {
    // make sure #form element exists in template
    createWidget('H81Mb7nu', { container: document.querySelector('#form')});
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
