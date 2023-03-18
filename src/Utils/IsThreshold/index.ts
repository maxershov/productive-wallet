/**
 * Check if two values smaller than threshold
 * @param  {number} first 
 * @param  {number} second 
 * @param  {number} threshold
 */

export function isThreshold(first: number, second: number, threshold: number) {
  const sub = first - second;
  return Math.abs(sub) < threshold;
}
