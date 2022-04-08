import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
  imagePath = '/assets/demo.gif';
  // tslint:disable-next-line: quotemark
  name = "NCF To-Do'er";

  constructor() {}

  ngOnInit(): void {}
}
