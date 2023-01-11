import {cn} from '.';

describe('cn test', () => {
    it('should return two classes', () => {
        const answer = cn(['one', 'two'])        
        return expect(answer).toEqual('one two');
    });
});