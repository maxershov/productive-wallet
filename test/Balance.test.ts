import { Balance } from '../src/Classes/Balance';

describe('Balance test', () => {
    it('should add value', () => {
        const balance = new Balance();
        balance.add(100);
        return expect(balance.amount).toEqual(100);
    });
});