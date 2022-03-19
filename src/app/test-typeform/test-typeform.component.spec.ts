import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTypeformComponent } from './test-typeform.component';

describe('TestTypeformComponent', () => {
  let component: TestTypeformComponent;
  let fixture: ComponentFixture<TestTypeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTypeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTypeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
