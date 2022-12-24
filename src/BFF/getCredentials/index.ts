export function getCredentials() {
  const api = localStorage.getItem('api');
  const key = localStorage.getItem('key');
  return { api, key };
}
