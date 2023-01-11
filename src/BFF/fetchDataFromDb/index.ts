import { Data } from 'types';
import { getCredentials } from '@/BFF/credentials';

export async function fetchDataFromDb(): Promise<Data> {
  const { api, key } = getCredentials();
  const apiData = `${api}/data`;
  const res = await fetch(apiData, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': key,
    },
  });
  const json = await res.json();
  return json[0].data;
}
