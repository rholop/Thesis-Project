import { Time } from '@angular/common';

export interface Task {
  id: number;
  name: string;
  priority: number;
  dueDate: Date;
  status: number;
  timeNeeded: number;
}

export class Task {
  public constructor(init?: Partial<Task>) {
    Object.assign(this, init);
  }
}
