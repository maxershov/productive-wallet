import { Data } from 'types';

export function saveLocalData(data: Data) {
  localStorage.setItem('data', JSON.stringify(data));
}
