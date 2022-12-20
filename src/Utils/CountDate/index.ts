export function countDays(diff: number): number {
  return Math.floor(diff / (1000 * 3600 * 24));
}
