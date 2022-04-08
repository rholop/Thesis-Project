import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  imagePath = '/assets/demo.gif';
  name = 'To Do List Helper';

  constructor() { }

  ngOnInit(): void {
  }

}
