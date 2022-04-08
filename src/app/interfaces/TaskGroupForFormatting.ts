import { TaskForFormatting } from './TaskForFormatting';

export interface TaskGroupForFormatting {
  dueDate: Date;
  tasks: Array<TaskForFormatting>;
}
