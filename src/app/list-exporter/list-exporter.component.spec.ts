import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExporterComponent } from './list-exporter.component';

describe('ListExporterComponent', () => {
  let component: ListExporterComponent;
  let fixture: ComponentFixture<ListExporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
