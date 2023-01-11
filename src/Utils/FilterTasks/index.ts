import { Task } from 'types';
import { TASK_TYPE } from '@/enums';

export function filterTasks(tasks: Task[], isTasks: boolean): Task[] {
  if (isTasks) {
    return tasks.filter((task) => task.type !== TASK_TYPE.HABIT);
  }
  return tasks.filter((task) => task.type === TASK_TYPE.HABIT);
}
