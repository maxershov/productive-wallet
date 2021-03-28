import { Task } from '../src/Classes/Task';

describe('Task test', () => {
  it('should set title', () => {
    const task = new Task('test', 100);
    return expect(task.title).toEqual('test');
  });
});