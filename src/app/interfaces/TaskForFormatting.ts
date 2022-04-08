export interface TaskForFormatting {
  id: number;
  name: string;
  priority: string;
  dueDate: Date;
  status: any;
  timeNeeded: any;
}

export class Task {
  public constructor(init?: Partial<Task>) {
    Object.assign(this, init);
  }
}
