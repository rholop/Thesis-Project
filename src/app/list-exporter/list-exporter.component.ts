import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list-exporter',
  templateUrl: './list-exporter.component.html',
  styleUrls: ['./list-exporter.component.scss']
})
export class ListExporterComponent implements OnInit {
  public tasks: Task[] = [];
  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private taskService: TaskService) { }

  compareDates(a: Date, b: Date): number {
    if (a < b) {
      return -1;
    }
    else if (a === b) {
      return 0;
    }
    else {
      return 1;
    }
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTaskList();
    this.tasks.sort((a, b) => this.compareDates(a.dueDate, b.dueDate) || b.priority - a.priority);
  }

  public openPDF(): void {
    const DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      const fileWidth = 208;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

}
