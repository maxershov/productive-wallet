import { Balance } from '../src/Classes/Balance';

describe('Balance test', () => {
    it('should add value', () => {
        const balance = new Balance();
        balance.add(100);
        balance.add(100);
        return expect(balance.amount).toEqual(200);
    });

    it('should withdraw value', () => {
        const balance = new Balance();
        balance.withdraw(100);
        balance.withdraw(100);
        return expect(balance.amount).toEqual(-200);
    });
});