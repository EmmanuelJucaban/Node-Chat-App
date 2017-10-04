const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(123e15212541);
    expect(res).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('        ');
    expect(res).toBeFalsy();
  });

  it('should allow string with non-space characters', () => {
    var res = isRealString('123414 12414512');
    expect(res).toBeTruthy();
  });
});
