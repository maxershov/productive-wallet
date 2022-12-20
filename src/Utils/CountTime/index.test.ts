import { countTime } from './';
import { getTimeDiff } from '../GetTimeDiff';

describe('countDays', () => {
  it('should return 2 hours between 20:00 and 22:00', () => {
    const dateTo = new Date('2022-12-20T22:00:00.000Z');
    const now = new Date('2022-12-20T20:00:00.000Z');
    const diff = getTimeDiff(dateTo, now);
    const answer = countTime(diff);
    return expect(answer).toEqual(2);
  });

  it('should return 1 house between 20:00 and 21:59', () => {
    const dateTo = new Date('2022-12-20T21:59:00.000Z');
    const now = new Date('2022-12-20T20:00:00.000Z');
    const diff = getTimeDiff(dateTo, now);
    const answer = countTime(diff);
    return expect(answer).toEqual(1);
  });
});
