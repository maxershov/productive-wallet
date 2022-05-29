import { User } from '../src/Classes/User';

describe('User test', () => {
    it('should create user', () => {
        const user = new User('Max');
        return expect(user.name).toEqual('Max');
    });
});