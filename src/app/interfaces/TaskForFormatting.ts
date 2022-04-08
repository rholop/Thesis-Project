export interface TaskForFormatting {
  id: number;
  name: string;
  priority: string;
  dueDate: Date;
  status: number;
  timeNeeded: number;
}

export class Task {
  public constructor(init?: Partial<Task>) {
    Object.assign(this, init);
  }
}
