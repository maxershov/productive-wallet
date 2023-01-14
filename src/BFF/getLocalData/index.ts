import { Data } from 'types';

export function getLocalData(): Data {
  const data = localStorage.getItem('data');
  return JSON.parse(data);
}
