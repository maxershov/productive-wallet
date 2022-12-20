export function getTimeDiff(dateTo: Date, now: Date): number {
  return dateTo.getTime() - now.getTime();
}
