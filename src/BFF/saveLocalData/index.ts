import { Task } from 'types';

export function saveLocalData(data: Task[]) {
  localStorage.setItem('data', JSON.stringify(data));
}
