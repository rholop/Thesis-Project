import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManualComponent } from './task-manual.component';

describe('TaskManualComponent', () => {
  let component: TaskManualComponent;
  let fixture: ComponentFixture<TaskManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
