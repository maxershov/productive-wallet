export function getCredentials() {
  const api = localStorage.getItem('api');
  const key = localStorage.getItem('key');
  return { api, key };
}

export function setCredentials(api: string, key: string) {
  localStorage.setItem('api', api);
  localStorage.setItem('key', key);
}
