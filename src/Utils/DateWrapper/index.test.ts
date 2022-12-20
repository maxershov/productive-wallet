import { dateWrapper } from ".";

describe('countDays', () => {
  it('should return 2 hours between 20:00 and 22:00', () => {
    const dateTo = new Date('2022-12-20T22:00:00.000Z');
    const now = new Date('2022-12-20T20:00:00.000Z');
    const answer = dateWrapper(dateTo, now);
    return expect(answer).toEqual("2 hours");
  });

  it('should return 2 days between 20 and 22', () => {
    const dateTo = new Date('2022-12-22T20:00:00.000Z');
    const now = new Date('2022-12-20T20:00:00.000Z');
    const answer = dateWrapper(dateTo, now);
    return expect(answer).toEqual("2 days");
  });

  it('should work with empty dateTo', () => {
    const now = new Date('2022-12-20T20:00:00.000Z');
    const answer = dateWrapper(undefined, now);
    return expect(answer).toEqual("");
  });
});
