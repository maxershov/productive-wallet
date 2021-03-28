import { User } from '../src/Classes/User';

describe('User test', () => {
    it('should create user', () => {
        const user = new User('Max');
        return expect(user.name).toEqual('Max');
    });

    it('should add task to User', () => {
        const user = new User('Max');
        user.addTask('Test', 100);
        return expect(user.tasks[0].title).toEqual('Test');
    });
});