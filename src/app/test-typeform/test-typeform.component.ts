import { Component, OnInit } from '@angular/core';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

@Component({
  selector: 'app-test-typeform',
  templateUrl: './test-typeform.component.html',
  styleUrls: ['./test-typeform.component.scss']
})
export class TestTypeformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
