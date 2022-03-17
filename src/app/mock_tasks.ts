import { Task } from './task';

export const TASKS: Task[] = [
  {
    id: 1,
    name: 'Calculus HW',
    priority: 1,
    timeNeeded: { hours: 1, minutes: 0 },
    dueDate: new Date('2019-01-16'),
    status: 1,
  },
  {
    id: 2,
    name: 'Data Structures HW',
    priority: -1,
    timeNeeded: { hours: -1, minutes: -1 },
    dueDate: new Date('2019-01-16'),
    status: -1,
  },
];
