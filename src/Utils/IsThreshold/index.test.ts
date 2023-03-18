import { isThreshold } from '.';

describe('isThreshold test', () => {
  it('should work with nums', () => {
    const answer = isThreshold(9, 5, 5);
    return expect(answer).toEqual(true);
  });

  it('should work with negative value', () => {
    const answer = isThreshold(5, 9, 5);
    return expect(answer).toEqual(true);
  });

  it('should work with negative nums', () => {
    const answer = isThreshold(-5, -9, 5);
    return expect(answer).toEqual(true);
  });
});
