import { Task } from 'types';

export function getLocalData(): Task[] {
  const data = localStorage.getItem('data');
  return JSON.parse(data);
}
