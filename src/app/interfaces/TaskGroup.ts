import { Task } from "./task";

export interface TaskGroup {
  dueDate: Date;
  tasks: Array<Task>;
}
