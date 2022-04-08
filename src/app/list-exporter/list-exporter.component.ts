import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskGroup } from '../interfaces/TaskGroup';
import { TaskService } from '../services/task.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { TaskForFormatting } from '../interfaces/TaskForFormatting';
import { TaskGroupForFormatting } from '../interfaces/TaskGroupForFormatting';
import { MatDialog } from '@angular/material/dialog';
import { HomeDialogComponent } from '../home-dialog/home-dialog.component';

@Component({
  selector: 'app-list-exporter',
  templateUrl: './list-exporter.component.html',
  styleUrls: ['./list-exporter.component.scss'],
})
export class ListExporterComponent implements OnInit {
  public tasks: Task[] = [];
  private taskGroups: TaskGroup[] = [];
  public finalTaskGroups: TaskGroupForFormatting[] = [];
  private pdfDate: string;
  private pdfName = 'To Do List - ';
  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  compareDates(a: Date, b: Date): number {
    if (a < b) {
      return -1;
    } else if (a.getTime() === b.getTime()) {
      return 0;
    } else {
      return 1;
    }
  }

  convertPriority(previous: number): string {
    if (previous === 1) {
      return 'Low';
    } else if (previous === 2) {
      return 'Medium';
    } else {
      return 'High';
    }
  }

  convertTask(previous: Task): TaskForFormatting {
    let tempTask: TaskForFormatting;
    tempTask = {
      id: previous.id,
      priority: this.convertPriority(previous.priority),
      name: previous.name,
      dueDate: previous.dueDate,
      status: previous.status,
      timeNeeded: previous.timeNeeded,
    };
    return tempTask;
  }

  convertTaskArray(previous: Task[]): TaskForFormatting[] {
    const tempArray: TaskForFormatting[] = [];
    for (const task of previous) {
      tempArray.push(this.convertTask(task));
    }
    return tempArray;
  }

  convertTaskGroup(previous: TaskGroup[]): TaskGroupForFormatting[] {
    const tempArray: TaskGroupForFormatting[] = [];
    for (const taskGroup of previous) {
      tempArray.push({
        dueDate: taskGroup.dueDate,
        tasks: this.convertTaskArray(taskGroup.tasks),
      });
    }
    return tempArray;
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTaskList();
    for (const task of this.tasks) {
      if (
        this.taskGroups.some(
          (group) => group.dueDate.getTime() === task.dueDate.getTime()
        )
      ) {
        const index = this.taskGroups.findIndex(
          (taskGroup) => taskGroup.dueDate.getTime() === task.dueDate.getTime()
        );
        this.taskGroups[index].tasks.push(task);
      } else {
        const tempArray: Task[] = [task];
        const newTaskGroup: TaskGroup = {
          dueDate: task.dueDate,
          tasks: tempArray,
        };
        this.taskGroups.push(newTaskGroup);
        console.log(typeof(task.dueDate));
      }
    }
    this.taskGroups.sort((a, b) => this.compareDates(a.dueDate, b.dueDate));
    for (const group of this.taskGroups) {
      group.tasks.sort((a, b) => b.priority - a.priority);
    }
    this.finalTaskGroups = this.convertTaskGroup(this.taskGroups);
  }

  openHomeDialog(): void {
    const dialogRef = this.dialog.open(HomeDialogComponent, {
      minWidth: '30em',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'yes') {
        this.taskService.clear();
      } else {
      }
    });
  }


  public openPDF(): void {
    this.pdfDate = Date().substring(4, 15);
    const DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      const fileWidth = 208;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 10, 10, fileWidth, fileHeight);
      PDF.save(this.pdfName + this.pdfDate + '.pdf');
    });
  }
}
