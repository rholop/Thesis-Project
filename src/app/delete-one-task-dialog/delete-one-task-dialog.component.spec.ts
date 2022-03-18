import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOneTaskDialogComponent } from './delete-one-task-dialog.component';

describe('DeleteOneTaskDialogComponent', () => {
  let component: DeleteOneTaskDialogComponent;
  let fixture: ComponentFixture<DeleteOneTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOneTaskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOneTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
