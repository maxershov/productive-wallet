import { Task } from 'types';

export function saveData(data: Task[]) {
  localStorage.setItem('data', JSON.stringify(data));
}
