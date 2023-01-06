import { getCredentials } from '@/BFF/credentials';
import { Task } from 'types';

export async function fetchDataFromDb(): Promise<Task[]> {
  const { api, key } = getCredentials();
  const res = await fetch(api, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': key,
    },
  });
  const json = await res.json();
  return json;
}
