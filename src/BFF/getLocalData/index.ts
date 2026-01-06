import { Data } from 'types';

export const getDefaultData = (): Data => ({
  user: {
    name: '',
    balance: 0,
  },
  tasks: [],
});

export function getLocalData(): Data {
  const data = localStorage.getItem('data');
  if (!data) {
    return getDefaultData();
  }
  try {
    return JSON.parse(data);
  } catch {
    return getDefaultData();
  }
}
