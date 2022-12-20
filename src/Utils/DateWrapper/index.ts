// TODO add day-days and hour-hours
import { countDays } from '../CountDate';
import { countHours } from '../CountHours';
import { getTimeDiff } from '../GetTimeDiff';

export function dateWrapper(dateTo: Date | undefined, now: Date): string {
  if (!dateTo || !now) return '';

  const diff = getTimeDiff(dateTo, now);
  const days = countDays(diff);
  if (days !== 0) {
    return `${days} days`;
  }
  return `${countHours(diff)} hours`;
}
