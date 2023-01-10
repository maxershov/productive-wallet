import { getCredentials } from '@/BFF/credentials';

export async function syncDataToDb(data: string) {
  const { api, key } = getCredentials();
  const apiData = `${api}/data/63b9d987dab2072b00006f59`;
  const res = await fetch(apiData, {
    method: 'PUT',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': key,
    },
    body: data,
  });
  const json = await res.json();

  // TODO: add success and error catch

  return json;
}
