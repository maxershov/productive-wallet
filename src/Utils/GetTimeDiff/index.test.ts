import { getTimeDiff } from './';

describe('countDays', () => {
  it('should work', () => {
    const dateTo = new Date('2022-12-20T22:00:00.000Z');
    const now = new Date('2022-12-20T20:00:00.000Z');
    const answer = getTimeDiff(dateTo, now);
    return expect(answer).toEqual(7200000);
  });
});
