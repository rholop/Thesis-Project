import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss']
})
export class TaskListContainerComponent implements OnInit {
  taskForm = this.fb.group({
    tasks: this.fb.array([this.fb.group({
      taskName: [''],
      taskStatus: ['']
    })])
  });

  get tasks(): FormArray {
    return this.taskForm.get('tasks') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addTask(): void {
    const group = this.fb.group({
      taskName: [''],
      taskStatus: ['']
    });
    this.tasks.push(group);
  }

}
