export function countDays(dateTo: Date, now: Date): number {
  const diff = dateTo.getTime() - now.getTime();
  return Math.floor(diff / (1000 * 3600 * 24));
}
