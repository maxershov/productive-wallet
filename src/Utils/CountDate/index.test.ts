import { countDays} from './';

describe('countDays', () => {
    it('should return one day between 21 and 20', () => {
        const dateTo = new Date("2022-12-21T14:00:00.000Z")
        const now = new Date("2022-12-20T14:00:00.000Z")
        const answer = countDays(dateTo, now)
        return expect(answer).toEqual(1);
    });

    it('should return 0 days between 20 and 20', () => {
        const dateTo = new Date("2022-12-20T14:00:00.000Z")
        const now = new Date("2022-12-20T14:00:00.000Z")
        const answer = countDays(dateTo, now)
        return expect(answer).toEqual(0);
    });
});