export function countTime(dateTo: Date, now: Date): number {
  const diff = dateTo.getTime() - now.getTime();
  return Math.floor(diff / (1000 * 3600));
}
